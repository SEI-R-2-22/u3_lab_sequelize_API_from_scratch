'use strict'
const { Restaurant } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lukes = await Restaurant.findAll({
      where: {
        restaurant_name: 'Lukes on Harlem'
      }
    })
    console.log(lukes[0].dataValues.id)
    const fuji = await Restaurant.findAll({
      where: {
        restaurant_name: 'Fuji-Ya'
      }
    })
    const jess = await Restaurant.findAll({
      where: {
        restaurant_name: 'Jess Cafe'
      }
    })
    return queryInterface.bulkInsert(
      'owners',
      [
        {
          ownerName: 'Steve DiSylvestro',
          restaurantId: lukes[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          ownerName: 'Hanzo Asashi',
          restaurantId: fuji[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          ownerName: 'June Kim',
          restaurantId: jess[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {})
  }
}
