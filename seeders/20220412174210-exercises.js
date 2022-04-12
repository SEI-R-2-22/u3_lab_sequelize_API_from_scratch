'use strict'

const { user } = require('pg/lib/defaults')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Jenna',
          lastName: 'Leopold',
          email: 'jenna@leopold.com',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'routines',
      [
        {
          title: 'First Workout Routine',
          targetRegion: 'lower body',
          trainingType: 'ballet barre',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'movements',
      [
        {
          name: 'plié',
          instructions:
            'stand with heels together, toes turned out, bend knees',
          sets: 3,
          reps: 8,
          routineId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
    await queryInterface.bulkDelete('routines', null, {})
    await queryInterface.bulkDelete('movements', null, {})
  }
}
