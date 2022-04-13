const {Review, Food } = require('../models')

const GetFoods = async (req, res) => {
  try {
    const food = await Food.findAll()
    res.send(food)
  } catch (error) {
    throw error
  }
}


const GetFoodReviews = async (req, res) => {
  try {
    const foodAndReviews = await Food.findByPk(req.params.food_id, {
      include: [{ model: Review }]
    })
    res.send(foodAndReviews)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFoods,
	GetFoodReviews
}
