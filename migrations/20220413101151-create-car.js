'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carBrand: {
        type: Sequelize.STRING
      },
      carType: {
        type: Sequelize.STRING
      },
      carPrice: {
        type: Sequelize.INTEGER
      },
      carDealerId: {
        type: Sequelize.INTEGER,
        field: 'car_dealer_Id',
        onDelete: 'CASCADE',
        reference: {
          model: 'car_dealers',
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
    await queryInterface.dropTable('cars');
  }
};