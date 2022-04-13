const Router = require('express').Router()
const ConstRouter = require('./ConstRouter')
const StarRouter = require('./StarRouter')

Router.use('/constellations', ConstRouter)
Router.use('/stars', StarRouter)

module.exports = Router
