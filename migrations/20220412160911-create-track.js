'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackName: {
        type: Sequelize.STRING
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'albumId',
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'artistId',
        onDelete: 'CASCADE',
        references: {
          model: 'artists',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tracks')
  }
}
