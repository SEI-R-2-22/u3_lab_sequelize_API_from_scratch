'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('regions', 'trainers')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('regions', 'trainers', { transaction })
  }
}
