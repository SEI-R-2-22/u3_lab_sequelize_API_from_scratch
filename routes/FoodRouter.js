const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get('/', controller.GetFoods)
Router.get('/:food_id', controller.GetFoodReviews)

module.exports = Router
