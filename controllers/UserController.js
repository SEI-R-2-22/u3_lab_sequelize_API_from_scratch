const { User, Review } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserReviews = async (req, res) => {
  try {
    const userAndReviews = await User.findByPk(req.params.user_id, {
      include: [{ model: Review, as: 'reviews'}]
    })
    res.send(userAndReviews)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserReviews
}
