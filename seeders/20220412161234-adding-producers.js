'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('producers', [
      {
        name: 'Madhouse'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('producers', null, {})
  }
}
