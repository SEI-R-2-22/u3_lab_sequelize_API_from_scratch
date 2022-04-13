const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/movies', controller.GetMovies)
Router.get('/:movie_id', controller.GetMovieDetails)