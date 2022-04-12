const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/', controller.GetAllProducts)
Router.get('/product/:product_id', controller.GetProductByPk)
Router.get('/carts', controller.GetAllProductsWithShoppingCart)

Router.post('/create', controller.CreateProduct)
Router.put('/update/:product_id', controller.UpdateProduct)
Router.delete('/delete/:product_id', controller.DeleteProduct)

module.exports = Router
