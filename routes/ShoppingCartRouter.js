const Router = require('express').Router()
const controller = require('../controllers/ShoppingCartController')

Router.get('/', controller.GetAllCart)
Router.get('/:cart_id', controller.GetCartByPk)
Router.get('/users', controller.GetAllCartWIthUser)
Router.get('/users/products', controller.GetAllCartWIthUserProducts)
Router.post('/create', controller.CreateCart)
Router.put('/update/:cart_id', controller.UpdateCart)
Router.delete('/delete/:cart_id', controller.DeleteCart)

module.exports = Router
