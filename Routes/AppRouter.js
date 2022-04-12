const Router = require('express').Router()
const PokemonRouter = require('./PokemonRouter')
const RegionRouter = require('./RegionRouter')
const TrainerRouter = require('./TrainerRouter')

Router.use('/pokemon', PokemonRouter)
Router.use('/region', RegionRouter)
Router.use('/trainer', TrainerRouter)

module.exports = Router
