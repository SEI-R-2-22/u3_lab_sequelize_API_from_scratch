'use strict';
const { Sport, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const teams = await Promise.all(
      [...Array(20)].map(async () => {
        let sport = await Sport.findOne({ order: sequelize.random(), raw:true})
        return {
          name: falso.randSportsTeam(),
          sport_id: sport.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('teams', teams)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams')
  }
};
