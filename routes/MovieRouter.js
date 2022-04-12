const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/', controller.GetMovies)
Router.get('/:movie_id', controller.GetMoviesAndActors)

module.exports = Router
