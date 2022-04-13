'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Makeup'
        },
        {
          name: 'Tops'
        },
        {
          name: 'Bottoms'
        },
        {
          name: 'Shoes'
        },
        {
          name: 'Accessories'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
