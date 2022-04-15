const Router = require('express').Router()
const controller = require('../controllers/IngredientController')

Router.get('/', controller.GetIng)

module.exports = Router