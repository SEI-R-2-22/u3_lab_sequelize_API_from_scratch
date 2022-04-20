const Router = require('express').Router()
const controller = require('../controllers/ShowtimeController')

// ROUTE BASE: api/showtimes
Router.get('/', controller.GetAllShowtimes)
Router.get('/:showtime_id', controller.GetShowtime)
Router.get('/byMovie/:movie_id', controller.GetShowtimesByMovie)
Router.get('/byScreen/:screen_id', controller.GetShowtimesByScreen)

Router.post('/new', controller.CreateShowtime)
Router.put('/update/:showtime_id', controller.UpdateShowtime)
Router.delete('/delete/:showtime_id', controller.DeleteShowtime)

   
module.exports = Router