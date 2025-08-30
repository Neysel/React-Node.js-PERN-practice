const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/',checkRole('ADMIN'),   deviceController.create) // to add 

router.get('/', deviceController.getAll) // to get
router.get('/:id', deviceController.getOne) // to get

module.exports = router

// http://localhost:5000/api/device 