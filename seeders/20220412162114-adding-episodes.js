'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Episode 1: Rebirth',
        animeId: 1
      },
      {
        title: 'Episode 1: Departure x And x Friends',
        animeId: 2
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('episodes', null, {})
  }
}
