const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TruckRouter = require('./TruckRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/truck', TruckRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router