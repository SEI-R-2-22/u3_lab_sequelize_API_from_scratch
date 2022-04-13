const Router = require('express').Router()
const controller = require('../controllers/AnimalController')

Router.get('/:animal_id', controller.GetAnimal)
Router.post('/:ranch_id', controller.CreateAnimal)
Router.put('/:animal_id', controller.UpdateAnimal)
Router.delete('/:animal_id', controller.DeleteAnimal)

module.exports = Router