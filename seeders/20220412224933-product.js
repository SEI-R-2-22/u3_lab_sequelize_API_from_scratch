'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Graphic T-shirt',
          price: 27.32,
          owner_id: 1,
          category_id: 2
        },
        {
          name: 'Benefit Eyeshadow',
          price: 35.44,
          owner_id: 3,
          category_id: 4
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
