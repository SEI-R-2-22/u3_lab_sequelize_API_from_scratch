const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/', controller.GetAllProducts)
Router.get('/:category_id', controller.GetProductsByCategory)
Router.post('/:user_id/:category_id', controller.CreateProduct)
Router.put('/:product_id', controller.UpdateProduct)
Router.delete('/:product_id', controller.DeleteProduct)
module.exports = Router