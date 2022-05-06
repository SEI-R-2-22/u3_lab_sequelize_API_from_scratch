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
      length: {
        type: Sequelize.STRING
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'artist_id',
        onDelete: 'CASCADE',
        references: {
          model: 'artists',
          key: 'id'
        }
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('songs');
  }
};