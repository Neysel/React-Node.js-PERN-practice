const uuid = require('uuid') // unique id
const path = require('path') // adaptive wat to your operation system
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
 const {name, price, brandId, typeId, info} = req.body
               const {img} = req.files
        let fileName = uuid.v4() + ".jpg" // genrate uique id's
        img.mv(path.resolve(__dirname, '..', 'static', fileName ))

        const device = await Device.create({name, price, brandId, typeId, img: fileName})

        return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
       
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
// http://localhost:5000/api/device?limit=1 

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAll({limit, offset})
        }
        if (brandId && !typeId) {
             devices = await Device.findAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId)  {
            devices = await Device.findAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where:{typeId, brandId}, limit, offset})
        }

        // this is for http://localhost:5000/api/device?brandId=2 and http://localhost:5000/api/device?brandId=1
        return res.json(devices)


    }
    async getOne(req, res) {

    }
}


module.exports = new DeviceController()