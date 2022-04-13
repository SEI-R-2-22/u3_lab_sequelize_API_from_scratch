const Router = require('express').Router()
const SportsRouter = require('./SportsRouter')
Router.use('/sports', SportsRouter)


module.exports = Router