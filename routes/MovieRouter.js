const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/getAllMovies', controller.getMovies)
Router.post('/createMovie', controller.createMovie)
Router.put('/update/year/:movie_id', controller.updateMovieYear)
Router.delete('/delete/:id', controller.deleteMovie)

module.exports = Router