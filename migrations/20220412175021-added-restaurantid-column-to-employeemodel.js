'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('employees', 'restaurantId', {
      type: Sequelize.INTEGER
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('employees', 'restaurantId')
  }
}
