const Router = require('express').Router()
const controller = require('../controllers/ShoppingCartController')

Router.get('/', controller.GetAllCart)
Router.get('/users', controller.GetAllCartWIthUser)
Router.get('/users/products', controller.GetAllCartWIthUserProducts)

module.exports = Router
