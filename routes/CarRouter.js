const Router = require('express').Router()
const controller = require('../controllers/CarController')

Router.get('/allcars', controller.GetAllCars)
Router.post('/:inventory_id', controller.CreateCar)
Router.put('/:car_id', controller.UpdateCar)
Router.delete('/:car_id', controller.DeleteCar)

module.exports = Router