const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ShoppingCartRouter = require('./ShoppingCartRouter')
const ProductRouter = require('./ProductRouter')

Router.use('/users', UserRouter)
Router.use('/carts', ShoppingCartRouter)
Router.use('/products', ProductRouter)

module.exports = Router
