'use strict';

const { Team, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const players = await Promise.all(
      [...Array(100)].map(async () => {
        let team = await Team.findOne({ order: sequelize.random(), raw:true})
        return {
          firstname: falso.randFirstName(),
          lastname: falso.randLastName(),
          team_id: team.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('players', players)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players')
  }
};

