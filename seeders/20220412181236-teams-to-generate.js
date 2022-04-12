'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const teams = [
      {
        name: 'New England Patriots',
        coach: 'Bill Belichick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Los Angeles Rams',
        coach: 'Sean McVay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baltimore Ravens',
        coach: 'John Harbaugh',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('teams', teams)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teams')
  }
}
