'use strict'
const { Property } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const p = await Property.findAll({ raw: true })
    const addresses = [...Array(10)].map((_, i) => ({
      street: falso.randStreetAddress(),
      city: falso.randCity(),
      state: falso.randState(),
      propertyId: p[i].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('addresses', addresses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses')
  }
}
