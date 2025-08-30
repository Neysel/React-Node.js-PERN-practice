const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/add/:id', basketController.moveToBasket) 
router.post('/remove/:id', basketController.moveOutBasket) 
router.get('/', basketController.getAll) 

module.exports = router