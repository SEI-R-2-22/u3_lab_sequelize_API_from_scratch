const Router = require('express').Router()
const AirportRouter = require('./AirportRouter')
Router.use('/airport', AirportRouter)
module.exports = Router