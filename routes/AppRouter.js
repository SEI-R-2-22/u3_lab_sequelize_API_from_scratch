const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const ActorRouter = require('./ActorRouter')

Router.use('/movies', MovieRouter)
Router.use('/actors', ActorRouter)

module.exports = Router