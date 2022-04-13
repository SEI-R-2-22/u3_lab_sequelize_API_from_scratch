'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('teams', 'createdAt', 'created_at')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'created_at', 'createdAt')
  }
}
