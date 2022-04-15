const Router = require('express').Router()
const CategoryRouter = require('./CategoryRouter')
const RecipeRouter = require('./RecipeRouter')
const IngredientRouter = require('./IngredientRouter')

Router.use('/cat', CategoryRouter)
Router.use('/cocktails', RecipeRouter)
Router.use('/ingredients', IngredientRouter)

module.exports = Router