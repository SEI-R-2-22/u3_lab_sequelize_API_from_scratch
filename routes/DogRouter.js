const Router = require('express').Router()
const controller = require('../controllers/DogController')

Router.get('/all', controller.GetAllDogs)

Router.get('/:dogId', controller.GetDogById)

Router.post('/:dogId/:userId', controller.CreateDog)

Router.delete('/:dogId', controller.DeleteDog)

Router.put('/:dogId', controller.UpdateDog)

module.exports = Router
