'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cities = [
      {
        name: 'Foxborough',
        state: 'MA',
        teamId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Los Angeles',
        state: 'CA',
        teamId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baltimore',
        state: 'MD',
        teamId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('cities', cities)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cities')
  }
}
