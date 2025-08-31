const uuid = require('uuid') // unique id
const path = require('path') // adaptive wat to your operation system
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
        let {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" // genrate uique id's
        img.mv(path.resolve(__dirname, '..', 'static', fileName ))
        const device = await Device.create({name, price, brandId, typeId, img: fileName})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i => DeviceInfo.create({
                title: i.title,
                description: i.description,
                deviceId : device.id
            }))
        }

     

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
// findAndCountAll for pagination

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset}) 
        }
        if (brandId && !typeId) {
             devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId)  {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }

        // this is for http://localhost:5000/api/device?brandId=2 and http://localhost:5000/api/device?brandId=1
        return res.json(devices)
    }
    async getOne(req, res) {
        let {id} = req.params
        let device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}


module.exports = new DeviceController()