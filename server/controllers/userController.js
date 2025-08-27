const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }
    async check(req, res, next) {
        // res.json('asdasdasd') 
        // http://localhost:5000/api/user/auth

        const {id} = req.query
        if (!id) {
          return  next(ApiError.badRequest('Doesnt have ID'))
        }
        res.json(id)

        //thats to get query params 
    }
}


module.exports = new UserController()