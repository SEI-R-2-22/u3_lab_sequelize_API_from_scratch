const Router = require('express').Router()
const controller = require('../controllers/BikeController')

Router.get('/allbikes', controller.GetAllBikes)
Router.post('/:inventory_id', controller.CreateBike)
Router.put('/:bike_id', controller.UpdateBike)
Router.delete('/:bike_id', controller.DeleteBike)

module.exports = Router