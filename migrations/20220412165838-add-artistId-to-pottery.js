'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('potteries', 'artistId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'artist_id',
      onDelete: 'CASCADE',
      references: {
        model: 'artists',
        key: 'id'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('potteries', 'artistId')
  }
}
