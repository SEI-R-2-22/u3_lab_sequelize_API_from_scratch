const Router = require('express').Router()
const controller = require('../controllers/ActorController')

Router.get('/getAll', controller.getAllActors)
Router.get('/inMovies/:id', controller.getActorWithMovie)
Router.post('/addToMovie/:movie_id', controller.addActorToMovie)
Router.delete('')

module.exports = Router