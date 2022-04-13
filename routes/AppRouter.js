const Router = require('express').Router()
const AnimalRouter = require('./AnimalRouter')

Router.use('/animal', AnimalRouter)

module.exports = Router