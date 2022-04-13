const { User, Dog, Walker } = require('../models')

const GetAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      include: [User, Walker]
    })
    res.send(dogs)
  } catch (error) {
    throw error
  }
}

const GetDogById = async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.dogId, {
      include: [User, Walker]
    })
    res.send(dog)
  } catch (error) {
    throw error
  }
}

const CreateDog = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let dogId = parseInt(req.params.dogId)
    let newDogBody = {
      id: dogId,
      userId: userId,
      ...req.body
    }
    let newDog = await Dog.create(newDogBody)
    res.send(newDog)
  } catch (error) {
    throw error
  }
}

const DeleteDog = async (req, res) => {
  try {
    const dogId = parseInt(req.params.dogId)
    await Dog.destroy({ where: { id: dogId } })
    res.send({ message: `Deleted dog with an id of ${dogId}` })
  } catch (error) {
    throw error
  }
}

const UpdateDog = async (req, res) => {
  try {
    let dogId = parseInt(req.params.dogId)
    let updatedDog = await Dog.update(req.body, {
      where: { id: dogId },
      returning: true
    })
    res.send(updatedDog)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllDogs,
  GetDogById,
  CreateDog,
  DeleteDog,
  UpdateDog
}
