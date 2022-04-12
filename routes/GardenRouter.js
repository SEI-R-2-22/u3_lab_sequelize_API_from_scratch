const Router = require('express').Router()
const controller = require('../controllers/GardenController')

Router.get('/', controller.GetAllGardens)
Router.post('/:garden_id', controller.CreateGarden)
Router.put('/:garden_id', controller.UpdateGarden)
Router.delete('/:garden_id', controller.DeleteGarden)

module.exports = Router
