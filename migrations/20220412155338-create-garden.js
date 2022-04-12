'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gardens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gardenType: {
        type: Sequelize.STRING
      },
      dirtType: {
        type: Sequelize.STRING
      },
      plantType: {
        type: Sequelize.STRING
      },
      waterSchedule: {
        type: Sequelize.STRING
      },
      plantCount: {
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
    await queryInterface.dropTable('gardens')
  }
}
