'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('pokemon', 'id')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('pokemon', 'id', {
      type: Sequelize.INTEGER
    })
  }
}
