const Router = require('express').Router()
const CarDealerRouter = require('./CarDealerRouter')
const CarRouter = require('./CarRouter')
const DriverRouter = require('./DriverRouter')

Router.use('/carDealers', CarDealerRouter)
Router.use('/cars', CarRouter)
Router.use('/drivers', DriverRouter)

module.exports = Router