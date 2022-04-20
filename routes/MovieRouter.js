const Router = require('express').Router()
const controller = require('../controllers/MovieController')

//BASE ROUTE: '/api/movies/'
Router.get('/', controller.GetAllMovies)
Router.get('/:movie_id', controller.GetMovie)
Router.get('/times/:movie_id', controller.GetMovieShowtimes)
Router.post('/new', controller.CreateMovie)
Router.put('/update/:movie_id', controller.UpdateMovie)
Router.delete('/delete/:movie_id', controller.DeleteMovie)

module.exports = Router