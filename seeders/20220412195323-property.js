'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const properties = [...Array(10)].map((_) => ({
      name: falso.randCompanyName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('properties', properties)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('properties')
  }
}
