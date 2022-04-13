const { Pokemon } = require('../models')

const GetAllPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll()
    res.send(pokemons)
  } catch (error) {
    throw error
  }
}

const UpdatePokemon = async (req, res) => {
  try {
    let pokemonId = parseInt(req.params.pokemon_id)
    let updatedPokemon = await Pokemon.update(req.body, {
      where: { id: pokemonId },
      returning: true
    })
    res.send(updatedPokemon)
  } catch (error) {
    throw error
  }
}

const CreatePokemon = async (req, res) => {
  try {
    let pokeBody = {
      ...req.body
    }
    let pokemon = await Pokemon.create(pokeBody)
    res.send(pokemon)
  } catch (error) {
    throw error
  }
}

const DestroyPokemon = async (req, res) => {
  try {
    let pokemonId = parseInt(req.params.pokemon_id)
    await Pokemon.destroy({ where: { id: pokemonId } })
    res.send({ message: `deleted pokemon with an id of ${pokemonId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPokemon,
  UpdatePokemon,
  DestroyPokemon,
  CreatePokemon
}
