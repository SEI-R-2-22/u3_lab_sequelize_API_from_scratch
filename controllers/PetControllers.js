const { Pets, Client } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const getAllPets = async (req, res) => {
    try {
        const allPets = await Pets.findAll({ order: ['clientId']})
        res.send(allPets)
    } catch (error) {
        throw error
    }
}

const GetPetDetails = async (req, res) => {
    try {
        const petDeets = await Pets.findByPk(req.params.petid)
        res.send(petDeets)
    } catch (error) {
        throw error
    }
}

const addNewPet = async (req, res) => {
    try {
      let petBody = ({
        ...req.body,
      })
      let newPet = await Pets.create(petBody)
      res.send(newPet)
    } catch (error) {
      throw error
    }
  }

const editPetInfo = async (req, res) => {
    try {
        let petId = parseInt(req.params.pet_id)
        let editedPet = awaitPets.update(req.body, {
            where: { id: petId },
            returning: true
        })

        res.send(editPetInfo)
    } catch (error) {
        throw error
    }
}