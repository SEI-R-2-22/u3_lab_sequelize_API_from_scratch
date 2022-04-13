'use strict'
const { Athlete, Sport, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workouts = await Promise.all(
      [...Array(50)].map(async () => {
        let athlete = await Athlete.findOne({ order: sequelize.random(), raw: true })
        let sport = await Sport.findOne({
          order: sequelize.random(),
          where: { athleteId: { [Op.not]: athlete.id } },
          raw: true
        })
        return {
          exerciseName: 'squats',
          durationMinutes: falso.randNumber({ min: 0, max: 100 }),
          sets: falso.randNumber({ min: 5, max: 10 }),
          reps: falso.randNumber({ min: 15, max: 30 }),
          sportId: sport.id,
          athleteId: athlete.id
      
        }
      })
    )
    return queryInterface.bulkInsert('workouts', workouts)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts')
  }
}
