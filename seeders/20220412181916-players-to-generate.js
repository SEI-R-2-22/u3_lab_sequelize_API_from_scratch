'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const players = [
      {
        name: 'Mac Jones',
        teamId: 1,
        position: 'QB',
        jerseyNumber: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devin McCourty',
        teamId: 1,
        position: 'S',
        jerseyNumber: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matt Stafford',
        teamId: 2,
        position: 'QB',
        jerseyNumber: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aaron Donald',
        teamId: 2,
        position: 'DE',
        jerseyNumber: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lamar Jackson',
        teamId: 3,
        position: 'QB',
        jerseyNumber: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('players', players)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players')
  }
}
