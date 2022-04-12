const Router = require('express').Router()
const controller = require('../controllers/PlantController')

Router.get('/', controller.GetAllPlants)

module.exports = Router
