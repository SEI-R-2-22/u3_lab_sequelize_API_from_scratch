'use strict'
const { Athlete, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sports = await Promise.all(
      [...Array(20)].map(async () => {
        let athlete = await Athlete.findOne({ order: sequelize.random(), raw: true })
        return {
          sportName: falso.randSports(),
          athleteId: athlete.id,
          
        }
      })
    )
    return queryInterface.bulkInsert('sports', sports)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sports')
  }
}
