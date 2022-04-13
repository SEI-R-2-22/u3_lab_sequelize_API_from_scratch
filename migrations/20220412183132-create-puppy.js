'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Puppies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dogName: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      homeId: {
        type: Sequelize.INTEGER
      },
      shotsUpToDate: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Puppies');
  }
};