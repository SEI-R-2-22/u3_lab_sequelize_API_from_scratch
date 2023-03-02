'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characterName: {
        type: Sequelize.STRING
      },
      realName: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      movieId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('actors');
  }
};