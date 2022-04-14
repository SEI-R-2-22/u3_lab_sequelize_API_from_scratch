const Router = require('express').Router()
const controller = require('../controllers/CarController')

// Get all Cars
Router.get('/', controller.GetCars)

module.exports = Router 