const Router = require('express').Router()

const TeamRouter = require('./TeamRouter')

Router.use('/team', TeamRouter)

module.exports = Router
