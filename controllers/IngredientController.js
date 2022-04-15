const { Category, Recipe, Ingredient } = require('../models')

const GetIng = async (req, res) => {
    try {
        const ing = await Ingredient.findAll()
        res.send(ing)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetIng
}