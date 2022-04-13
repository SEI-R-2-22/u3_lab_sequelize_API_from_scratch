const Router = require('express').Router()

const BikeRouter = require('./BikeRouter')
const CarRouter = require('./CarRouter')
const InventoryRouter = require('./InventoryRouter')

Router.use('/bikes', BikeRouter)
Router.use('/cars', CarRouter)
Router.use('/inventories', InventoryRouter)

module.exports = Router