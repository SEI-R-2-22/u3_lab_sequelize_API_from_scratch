'use strict'
const { Dog, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const walkers = await Promise.all(
      [...Array(10)].map(async () => {
        let dog = await Dog.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          fullName: falso.randFullName({ withAccents: false }),
          avatar: falso.randAvatar(),
          email: falso.randEmail(),
          fullAddress: falso.randFullAddress({ includeCounty: false }),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    await queryInterface.bulkInsert('walkers', walkers)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('walkers')
  }
}
