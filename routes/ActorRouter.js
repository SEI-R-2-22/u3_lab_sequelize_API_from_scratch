const Router = require('express').Router()
const controller = require('../controllers/ActorController')

Router.get('/getAll', controller.getAllActors)
Router.get('/inMovies/:id', controller.getActorWithMovie)
Router.post('/addToMovie/:movie_id', controller.addActorToMovie)
Router.delete('/deleteActor/:actor_id', controller.deleteActorById)

module.exports = Router