const Router = require('express').Router()
const controller = require('../controllers/TruckController')

//Get all trucks
Router.get('/', controller.GetTrucks)

// Get Truck by Id
Router.get('/truckId', controller.GetTruckbyId)

// //Create Truck
// Router.post('/')

// //Update Truck
// Router.put('/:truckId')

// // Delete a truck
// Router.delete('/:truckId')

module.exports = Router