'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const households = await Promise.all(
      [...Array(50)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          address: falso.randStreetAddress(),
          hasYard: falso.randBoolean(),
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('households', households)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('households')
  }
}
