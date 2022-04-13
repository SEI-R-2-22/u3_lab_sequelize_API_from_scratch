const { User, Dog, Walker } = require('../models')
//const { Op } = require('sequelize')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Dog
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: Dog
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let newUserBody = {
      id: userId,
      ...req.body
    }
    let newUser = await User.create(newUserBody)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted user with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  CreateUser,
  DeleteUser,
  UpdateUser
}
