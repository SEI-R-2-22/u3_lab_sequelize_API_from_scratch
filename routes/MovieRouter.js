const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/', controller.GetMovies)
Router.get('/:movie_id', controller.GetMoviesAndActors)

Router.post('/', controller.CreateMovie)
Router.put('/:movie_id', controller.UpdateMovie)
Router.delete('/:movie_id', controller.DeleteMovie)


module.exports = Router
