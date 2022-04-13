const Router = require('express').Router()
const EpisodeRouter = require('./EpisodeRouter')
const ShowRouter = require('./ShowRouter')
const SeasonRouter = require('./SeasonRouter')
Router.use('/shows', ShowRouter)
Router.use('/seasons', SeasonRouter)
Router.use('/episodes', EpisodeRouter)
module.exports = Router
