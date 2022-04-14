const Router = require('express').Router()
const SportRouter = require('./SportRouter')
const TeamRouter = require('./TeamRouter')
const PlayerRouter = require('./PlayerRouter')
Router.use('/sports', SportRouter)
Router.use('/teams', TeamRouter)
Router.use('/players', PlayerRouter )
module.exports = Router