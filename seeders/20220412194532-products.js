'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await Promise.all(
      [...Array(100)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          name: falso.randFileName(),
          description: falso.randFileName(),
          owner_id: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('products', products)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products')
  }
}
