const {  Pokemon,Zone,Moves  } = require('../models')
const { Op, literal, fn, col } = require('sequelize')



const GetAllPoke = async (req, res) => {
  try {
    const recents = await Pokemon.findAll()
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const newPoke = async (req, res) => {
  try {
    // let pokeId = parseInt(req.params.pokemon_id)
    let pokeBody = {
      ...req.body
    }
    let poke = await Pokemon.create(pokeBody)
    res.send(poke)

  } catch (error) {
    throw error
  }
}

const UpdatePoke = async (req, res) => {
  try {
    let pokemons_id = parseInt(req.params.poke_id)
    console.log(pokemons_id,'-------------------------------------------------')
    let updatePoke = await Pokemon.update(
      req.body,{
      where: {id:pokemons_id}, returning: true
    })
    res.send(updatePoke)
  } catch (error) {
    throw error
  }
}

const DeletePoke = async (req, res) => {
  try {
    let poke_Id = parseInt(req.params.poke_id)
    await Pokemon.destroy({
      where:{ id: poke_Id}
    })
    res.send({message:' DESTROYED ' + poke_Id})
  } catch (error) {
    throw error
  }
}

module.exports = {

  newPoke,
  UpdatePoke,
  DeletePoke,
  GetAllPoke
}
