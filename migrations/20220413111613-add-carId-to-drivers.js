'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('drivers', 'carId', {
      type: Sequelize.INTEGER,
      field: 'car_Id',
      onDelete: 'CASCADE',
      reference: {
        model: 'cars',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('drivers', 'carId')
  }
};

