const Router = require('express').Router()
const controller = require('../controllers/AirportController')

Router.get('/all', controller.GetAllAirport)
Router.post('/newAirport',controller.newAirport)
Router.put('/update/:airport_id',controller.UpdateAirport)
Router.delete('/delete/:airport_id',controller.DeleteAirport)
module.exports = Router