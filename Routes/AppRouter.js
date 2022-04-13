const express = require('express')
const Router = require('express').Router()
const PokemonRouter = require('./PokemonRouter')
const RegionRouter = require('./RegionRouter')
// const TrainerRouter = require('./TrainerRouter')

Router.use('/pokemon', PokemonRouter)
Router.use('/region', RegionRouter)
// router.use('/trainer', TrainerRouter)

module.exports = Router
