'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'album_id',
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      },
      bandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'band_id',
        onDelete: 'CASCADE',
        references: {
          model: 'bands',
          key: 'id'
        }
      },
      createdAt: {
        field: 'createdAt',
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updatedAt',
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('songs');
  }
};