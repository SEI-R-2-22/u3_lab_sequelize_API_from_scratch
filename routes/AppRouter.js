const Router = require('express').Router()
const TournamentRouter = require('./TournamentRouter')
const GolferRouter = require('./GolferRouter')
const GolfballRouter = require('./GolfballRouter')
Router.use('/tournament', TournamentRouter)
Router.use('/golfer', GolferRouter)
// Router.use('/golfball', GolfballRouter)
module.exports = Router
