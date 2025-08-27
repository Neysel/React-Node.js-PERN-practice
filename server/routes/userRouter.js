const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration) // add smth
router.post('/login', userController.login) // get something
router.get('/auth', userController.check)  // then watch whats inside

// works
// router.get('/auth', (req, res) => {
//     res.json({message: 'All working!'})
// }) 

module.exports = router