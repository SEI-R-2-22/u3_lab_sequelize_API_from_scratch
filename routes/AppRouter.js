const Router = require('express').Router()
const ProducerRouter = require('./ProducerRouter')
const AnimeRouter = require('./AnimeRouter')
const EpisodeRouter = require('./EpisodeRouter')
Router.use('/producers', ProducerRouter)
Router.use('/animes', AnimeRouter)
Router.use('/episodes', EpisodeRouter)
module.exports = Router
