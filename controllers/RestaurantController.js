const { Restaurant } = require('../models')
const GetRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}
const CreateRestaurant = async (req, res) => {
  try {
    let restaurantId = parseInt(req.params.restaurant_id)
    let restaurantBody = {
      restaurantId,
      ...req.body
    }
    let restaurant = await Restaurant.create(restaurantBody)
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}
const UpdateRestaurant = async (req, res) => {
  try {
    let restaurantId = parseInt(req.params.restaurant_id)
    let updatedRestaurant = await Restaurant.update(req.body, {
      where: { id: restaurantId },
      returning: true
    })
    res.send(updatedRestaurant)
  } catch (error) {
    throw error
  }
}
const DeleteRestaurant = async (req, res) => {
  try {
    let restaurantId = parseInt(req.params.restaurant_id)
    await Restaurant.destroy({ where: { id: restaurantId } })
    res.send({ message: `deleted twert with id of ${restaurantId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRestaurants,
  CreateRestaurant,
  DeleteRestaurant,
  UpdateRestaurant
}
