'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn
    ('bikes', 'bike', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'inventories',
        key: 'id'
      }
    })
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn
    ('bikes', 'bike')
  }
};
