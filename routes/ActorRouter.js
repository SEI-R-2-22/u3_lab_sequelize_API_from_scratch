const Router = require('express').Router()
const controller = require('../controllers/ActorController')

// base is /api/actors 
Router.get('/movie_id', controller.GetActorDetails)

module.exports = Router