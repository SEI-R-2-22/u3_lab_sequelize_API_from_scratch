const Router = require('express').Router()

const ProductRouter = require('./ProductRouter')


Router.use('/product', ProductRouter)
module.exports = Router