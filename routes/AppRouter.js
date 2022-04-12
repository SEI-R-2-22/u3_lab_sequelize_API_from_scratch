const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const ActorRouter = require('./ActorRouter')
const GenreRouter = require('./GenreRouter')

Router.use('/movies', MovieRouter)
Router.use('/actors', ActorRouter)
Router.use('/genres', GenreRouter)

module.exports = Router