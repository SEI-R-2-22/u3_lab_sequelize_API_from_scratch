'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('animes', [
      {
        title: 'Death Note',
        episodes: 37,
        producerId: 1
      },
      {
        title: 'Hunter x Hunter',
        episodes: 148,
        producerId: 1
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('animes', null, {})
  }
}
