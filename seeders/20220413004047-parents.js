'use strict'

const { School } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const school = await School.findAll({ raw: true })
    const parents = [...Array(10)].map((_, i) => ({
      name: falso.randFullName(),
      childrenCount: falso.randNumber({ min: 1, max: 500 }),
      school_id: school[i].id
    }))
    await queryInterface.bulkInsert('parents', parents)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('parents')
  }
}
