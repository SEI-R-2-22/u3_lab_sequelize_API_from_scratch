const Router = require('express').Router()
const controller = require('../controllers/TwertController')

Router.get('/products',controller.GetAllProducts)
Router.get('/view/:product_id', controller.GetProductsDetails)
Router.post('/:user_id' ,controller.CreateProduct)
Router.put('/:product_id' ,controller.UpdateProducts)
Router.delete('/:product_id' ,controller.DeleteProducts)

module.exports = Router