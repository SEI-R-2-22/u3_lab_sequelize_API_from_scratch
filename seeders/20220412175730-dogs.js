'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await User.findAll({ raw: true })
    const dogs = [...Array(50)].map((_) => {
      let r = Math.floor(Math.random() * b.length)
      return {
        breed: falso.randDog(),
        firstName: falso.randFirstName(),
        walkFreq: falso.randFrequency(),
        userId: b[r].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('dogs', dogs)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dogs')
  }
}
