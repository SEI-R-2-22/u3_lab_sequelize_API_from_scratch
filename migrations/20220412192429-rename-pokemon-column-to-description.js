'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('regions', 'pokemon', 'description')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('regions', 'descripton', 'pokemon')
  }
}
