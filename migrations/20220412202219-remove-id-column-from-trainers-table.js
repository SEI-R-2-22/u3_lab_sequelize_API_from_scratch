'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('trainers', 'id')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('trainers', 'id', { transaction })
  }
}
