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

    }
    async getOne(req, res) {

    }
}


module.exports = new DeviceController()