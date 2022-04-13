const Router = require('express').Router()
const controller = require('../controllers/FoodController')

Router.get('/food', (req, res) => res.json({ message: 'Food router Works' }))
Router.get('/all', controller.GetAllFoods)
Router.post('/:list_id/:food_name', controller.CreateNewFood)
Router.put('/:food_id', controller.UpdateFood)
Router.delete('/:food_id', controller.DeleteFood)

module.exports = Router

