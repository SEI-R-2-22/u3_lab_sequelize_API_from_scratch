const { User, Dog, Walker } = require('../models')
//const { Op } = require('sequelize')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(req.params.user_id)
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers
}
