const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')

class BasketController {
    async moveToBasket(req, res) {
        const {id} = req.body
        const basketAdd = await Basket.create({id})
        return res.json(basketAdd)
    }

    async moveOutBasket(req, res) {
        const {id} = req.body
        // write later
    }
    async getAll(req, res) {
        const allGoods = await Basket.findAll()
        return res.json(allGoods)
    }

}


module.exports = new BasketController()