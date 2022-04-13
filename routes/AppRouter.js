const Router = require('express').Router()
const RestaurantRouter = require('./RestaurantRouter')
const OwnerRouter = require('./OwnerRouter')
const EmployeeRouter = require('./EmployeeRouter')
Router.use('/restaurant', RestaurantRouter)
Router.use('/owner', OwnerRouter)
Router.use('/employee', EmployeeRouter)
module.exports = Router
