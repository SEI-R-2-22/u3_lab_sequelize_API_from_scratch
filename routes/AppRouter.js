const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const ActorRouter = require('./ActorRouter')
const CrewRouter = require('./CrewRouter')


Router.use('/movies', MovieRouter)
Router.use('/actors', ActorRouter)
Router.use('/crew', CrewRouter)


module.exports = Router
