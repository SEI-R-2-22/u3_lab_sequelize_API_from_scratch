'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('owners', 'restaurantId', {
      type: Sequelize.INTEGER
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('owners', 'restaurantId')
  }
}
