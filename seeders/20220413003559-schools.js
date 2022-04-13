'use strict'

const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const schools = [...Array(10)].map((s) => ({
      name: falso.randWord(),
      population: falso.randNumber({ min: 1, max: 2000 }),
      uniform: true
    }))
    await queryInterface.bulkInsert('schools', schools)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('schools')
  }
}
