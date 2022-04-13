const Router = require('express').Router()
const controller = require('../controllers/CrewController')

Router.get('/', controller.GetCrew)
Router.get('/:movie_id', controller.GetCrewDetails)

module.exports = Router
