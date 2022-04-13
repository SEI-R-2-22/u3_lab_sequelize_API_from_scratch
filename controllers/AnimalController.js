const { Ranch, Animal } = require('../models')


  
  const GetAnimal = async (req, res) => {
    try {
      const animal = await Animal.findByPk(req.params.animal_id)
      res.send(animal)
    } catch (error) {
      throw error
    }
  }
  
  const CreateAnimal = async (req, res) => {
    try {
      let ranchId = parseInt(req.params.ranch_id)
      let animalBody = {
        ranchId,
        ...req.body
      }
      let animal = await Animal.create(animalBody)
      res.json(animal)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateAnimal = async (req, res) => {
    try {
      let animalId = parseInt(req.params.animal_id)
      let updatedAnimal = await Animal.update(req.body, {
        where: { id: animalId },
        returning: true
      })
      res.json(updatedAnimal)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteAnimal = async (req, res) => {
    try {
      let animalId = parseInt(req.params.animal_id)
      await Animal.destroy({ where: {id: animalId} })
      res.send({ message: `Deleted twert with an id of ${animalId}`})
    } catch (error) {
      throw error
    }
  }
  
  module.exports = {
    
  
    GetAnimal,
    CreateAnimal,
    UpdateAnimal,
    DeleteAnimal
  }