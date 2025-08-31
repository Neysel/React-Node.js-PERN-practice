const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // for encryption
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
return  jwt.sign(
        { id, email, role}, // payload
          process.env.SECRET_KEY,
          {expiresIn: '24h'} // option
        )
}

class UserController {
    async registration(req, res, next) {
      const {email, password, role} = req.body
       let candidate = await User.findOne({where: {email}})
      if (candidate) {
        return next(ApiError.badRequest('user exists'))
      }
      if (!email || !password) {
         return next(ApiError.badRequest('incorrect email or password'))
      }
     
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({email, role, password: hashPassword})
      const basket = await Basket.create({userId: user.id})
      const token = generateJwt(user.id, user.email, user.role)
      return res.json({token})
    }

    async login(req, res, next) {
      const {email, password} = req.body
      const user = await User.findOne({where: {email}})
        if (!user) {
          return next(ApiError.internal('wrong user or password'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
          return next(ApiError.internal('wrong user or password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        // res.json('asdasdasd') 
        // http://localhost:5000/api/user/auth
        // const {id} = req.query
        // if (!id) {
        //   return  next(ApiError.badRequest('Doesnt have ID'))
        // }
        // res.json(id)
        // res.json({message: "ALL RIGHT"})
        //thats to get query params 

        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}


module.exports = new UserController()