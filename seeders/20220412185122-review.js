'use strict'
const { User, Food, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = await Promise.all(
      [...Array(500)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let food = await Food.findOne({
          order: sequelize.random(), raw: true })
        return {
          content: falso.randSentence(),
          stars: falso.randNumber({ min: 0, max: 10 }),
          user_id: user.id,
          food_id: food.id
        }
      })
    )
    return queryInterface.bulkInsert('reviews', reviews)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews')
  }
}
