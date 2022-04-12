const { Pokemon } = require('../models')

const GetAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findAll()
    res.send(pokemon)
  } catch (error) {}
}

module.exports = {
  GetAllPokemon
}
