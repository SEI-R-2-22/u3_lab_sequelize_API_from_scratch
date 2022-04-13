const { User, Post } = require('../models')

const GetAllProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndPost = await User.findByPk(req.params.user_id, {
      include: [{ model: Post, as: 'post' }]
    })
    res.send(userAndPost)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllProfiles,
  GetUserProfile
}
