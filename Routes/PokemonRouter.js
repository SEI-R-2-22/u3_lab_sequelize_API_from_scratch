const Router = require('express').Router()
const controllers = require('../Controllers/PokemonController')

Router.get('/pokemon', controllers.GetAllPokemon)
