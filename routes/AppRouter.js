const Router = require('express').Router()
const PokeRouter = require('./PokeRouter')
Router.use('/poke', PokeRouter)
module.exports = Router
