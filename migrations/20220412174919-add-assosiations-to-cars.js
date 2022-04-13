'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn
    ('cars', 'car', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'inventories',
        key: 'id'
      }
    })
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn
    ('cars', 'car')
    
  }
};
