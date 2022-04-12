const { User } = require('../models')

const GetUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}
const GetUserByPk = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const users = await User.findByPk(userId)
    res.send(users)
  } catch (error) {
    throw error
  }
}
const CreateUser = async (req, res) => {
  try {
    const user = req.body
    const newUser = await User.create(user)

    res.send(newUser)
  } catch (error) {
    throw error
  }
}
const UpdateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const updateInfo = req.body
    const updated = await User.update(updateInfo, {
      where: { id: userId },
      returning: true
    })

    res.send(updated)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })

    res.send({ message: `User at id ${userId} has been remove` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUserByPk
}
