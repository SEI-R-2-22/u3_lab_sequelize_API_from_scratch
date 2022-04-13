'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('teams', 'updatedAt', 'updated_at')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('teams', 'updated_at', 'updatedAt')
  }
}
