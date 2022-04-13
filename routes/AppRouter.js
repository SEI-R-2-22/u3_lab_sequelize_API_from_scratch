const Router = require('express').Router()
const ArtistRouter = require('./ArtistRouter')
const PotteryRouter = require('./PotteryRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/artist', ArtistRouter)
Router.use('/pottery', PotteryRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router
