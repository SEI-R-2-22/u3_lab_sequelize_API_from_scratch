const { Category, Recipe, Ingredient } = require('../models')

const GetCategories = async (req, res) => {
    try {
        const family = await Category.findAll()
        res.send(family)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCategories
}