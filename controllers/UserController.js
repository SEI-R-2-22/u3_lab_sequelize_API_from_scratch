const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserDetail = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id)
    const userDetails = await User.findByPk(user_id)
    res.send(userDetails)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const users = await User.create(req.body)
    res.send(users)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id)
    const updatedUser = await User.update(req.body, {
      where: { id: user_id },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `deleted with id of ${userId}` })
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetUsers,
  GetUserDetail,
  CreateUser,
  UpdateUser,
  DeleteUser

}