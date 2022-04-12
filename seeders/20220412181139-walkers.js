'use strict'
const { Dog, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await Dog.findAll({ raw: true })
    const walkers = [...Array(10)].map((_) => {
      let r = Math.floor(Math.random() * b.length)
      return {
        fullName: falso.randFullName({ withAccents: false }),
        avatar: falso.randAvatar(),
        email: falso.randEmail(),
        fullAddress: falso.randFullAddress({ includeCounty: false }),
        dogId: b[r].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert('walkers', walkers)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('walkers')
  }
}
