'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('reviews', 'potteryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'pottery_id',
      onDelete: 'CASCADE',
      references: {
        model: 'potteries',
        key: 'id'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('reviews', 'potteryId')
  }
}
