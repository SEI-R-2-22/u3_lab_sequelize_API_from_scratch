const Router = require('express').Router()
const controller = require('../controllers/RecipeController')

Router.get('/', controller.GetCocktails)
Router.post('/build_cocktail', controller.CreateCocktail)
Router.put('/update_cocktail/:recipeId', controller.UpdateCocktail)
Router.delete('/remove_cocktail/:recipeId', controller.DeleteCocktail)
module.exports = Router