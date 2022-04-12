'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'artists',
      [
        {
          artistName: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {})
  }
}
