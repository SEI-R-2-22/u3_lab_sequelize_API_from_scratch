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
    await queryInterface.dropTable('albums');
  }
};