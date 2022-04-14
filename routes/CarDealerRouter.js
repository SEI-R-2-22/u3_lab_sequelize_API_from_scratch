const Router = require('express').Router()
const controller = require('../controllers/CarDealerController')

// Get all Car Dealers
Router.get('/', controller.GetCarDealers)

// Create a Car Dealer
Router.post('/', controller.CreateCarDealer)

// Update a Car Dealer
Router.put('/:carDealerId', controller.UpdateCarDealer)

// Delete a Car Dealer
Router.delete('/:carDealerId', controller.DeleteCarDealer)

module.exports = Router 