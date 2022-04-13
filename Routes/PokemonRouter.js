const Router = require('express').Router()
const controllers = require('../Controllers/PokemonController')

Router.get('/pokemon', controllers.GetAllPokemon)
Router.put('/pokemon/:id', controllers.UpdatePokemon)
Router.post('/pokemon', controllers.AddPokemon)
Router.delete('/pokemon/:id', controllers.DestroyPokemon)

module.exports = Router
