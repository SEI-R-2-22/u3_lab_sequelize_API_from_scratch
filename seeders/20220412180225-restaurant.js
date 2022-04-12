'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'restaurants',
      [
        {
          restaurant_name: 'Lukes on Harlem',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_name: 'Fuji-Ya',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_name: 'Jess Cafe',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurants', null, {})
  }
}
