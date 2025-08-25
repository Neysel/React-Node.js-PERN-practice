const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration) // add smth
router.get('/login', userController.login) // get something
router.get('/auth', userController.check) 

module.exports = router