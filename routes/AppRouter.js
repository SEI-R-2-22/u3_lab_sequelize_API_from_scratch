const Router = require('express').Router()

const MovieRouter = require('./MovieRouter')
// const ScreenRouter = require('./ScreenRouter')
const ShowtimeRouter = require('./ShowtimeRouter')

const controller = require('../controllers/MovieController')

Router.get('/', (req,res) => res.json({
  message: 'API (G)root!'
}))

Router.use('/movies', MovieRouter)
Router.use('/showtimes', ShowtimeRouter)


module.exports = Router