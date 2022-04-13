const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const ReviewRouter = require('./ReviewRouter')
Router.use('/users', UserRouter)
Router.use('/products', ProductRouter)
Router.use('/reviews', ReviewRouter)
module.exports = Router
