'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cars', 'carDealerId', {
      type: Sequelize.INTEGER,
      field: 'car_dealer_Id',
      onDelete: 'CASCADE',
      reference: {
        model: 'car_dealers',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('cars', 'carDealerId')
  }
};
