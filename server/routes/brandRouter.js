const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

router.post('/', brandController.create) // to add 
router.get('/', brandController.getAll) // to get

module.exports = router