'use strict'
const { Property } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const p = await Property.findAll({ raw: true })
    const tenants = [...Array(200)].map((_) => {
      let r = Math.floor(Math.random() * p.length)
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        email: falso.randEmail(),
        propertyId: p[r].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('tenants', tenants)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tenants')
  }
}
