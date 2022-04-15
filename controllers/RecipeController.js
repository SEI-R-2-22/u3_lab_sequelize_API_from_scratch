const { Recipe, Ingredient } = require('../models')

const GetCocktails = async (req, res) => {
    try {
        const recipe = await Recipe.findAll()
        res.send(recipe)
    } catch (error) {
        throw error
    }
}

const CreateCocktail = async (req, res) => {
    try {
        let buildBody = {
            ...req.body
        }

        let build = await Recipe.create(buildBody)
        res.send(build)
    } catch (error) {
        throw error
    }
}

const UpdateCocktail = async (req, res) => {
    try {
        let drinkId = parseInt(req.params.recipeId)

        let updatedCocktail = await Recipe.update(req.body, {
            where: { id: drinkId },
            returning: true
        })
        res.send(updatedCocktail)
    } catch (error) {
        throw error
    }
}

const DeleteCocktail = async (req, res) => {
    try {
        let drinkId = parseInt(req.params.recipeId)
        await Recipe.destroy({ where: { id: drinkId } })
        res.send({ message: `Cocktail ${drinkId} was deleted` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCocktails,
    CreateCocktail,
    UpdateCocktail,
    DeleteCocktail
}