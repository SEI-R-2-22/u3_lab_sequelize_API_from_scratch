const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./ReviewRouter')
Router.use('/movies', MovieRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/users', UserRouter)

module.exports = Router