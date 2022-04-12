'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const dogs = await Promise.all(
      [...Array(10)].map(async () => {
        let user = await User.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          breed: falso.randDog(),
          firstName: falso.randFirstName(),
          walkFreq: falso.randFrequency(),
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    await queryInterface.bulkInsert('dogs', dogs)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dogs')
  }
}
