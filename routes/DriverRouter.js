const Router = require('express').Router()
const controller = require('../controllers/DriverController')

// Get all Drivers
Router.get('/', controller.GetDrivers)

module.exports = Router