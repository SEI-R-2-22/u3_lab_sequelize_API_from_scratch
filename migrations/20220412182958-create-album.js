'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      songs: {
        type: Sequelize.STRING
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('albums');
  }
};