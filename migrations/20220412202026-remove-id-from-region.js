'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('regions', 'id')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('regions', 'id', {
      type: Sequelize.INTEGER
    })
  }
}
