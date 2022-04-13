const { User, Dog, Walker } = require('../models')

const GetAllWalkers = async (req, res) => {
  try {
    const walkers = await Walker.findAll({
      include: Dog
    })
    res.send(walkers)
  } catch (error) {
    throw error
  }
}

const GetWalkerById = async (req, res) => {
  try {
    const walker = await Walker.findByPk(req.params.walkerId, {
      include: Dog
    })
    res.send(walker)
  } catch (error) {
    throw error
  }
}

const CreateWalker = async (req, res) => {
  try {
    let dogId = parseInt(req.params.dogId)
    let walkerId = parseInt(req.params.walkerId)
    let newWalkerBody = {
      id: walkerId,
      dogId: dogId,
      ...req.body
    }
    let newWalker = await Walker.create(newWalkerBody)
    res.send(newWalker)
  } catch (error) {
    throw error
  }
}

const DeleteWalker = async (req, res) => {
  try {
    const walkerId = parseInt(req.params.walkerId)
    await Walker.destroy({ where: { id: walkerId } })
    res.send({ message: `Deleted walker with an id of ${walkerId}` })
  } catch (error) {
    throw error
  }
}

const UpdateWalker = async (req, res) => {
  try {
    let walkerId = parseInt(req.params.walkerId)
    let updateWalker = await Walker.update(req.body, {
      where: { id: walkerId },
      returning: true
    })
    res.send(updateWalker)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllWalkers,
  GetWalkerById,
  CreateWalker,
  DeleteWalker,
  UpdateWalker
}
