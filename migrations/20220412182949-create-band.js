'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      artists: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('bands');
  }
};