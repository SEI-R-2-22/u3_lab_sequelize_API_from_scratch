'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.INTEGER
      },
      trainer: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('pokemon')
  }
}
