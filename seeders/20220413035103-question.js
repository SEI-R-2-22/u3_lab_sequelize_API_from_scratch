'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const questions = await Promise.all(
      [...Array(400)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          content: falso.randParagraph(),
          userId: user.id,
          // createdAt: new Date(),
          // updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('questions', questions)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions')
  }
}
