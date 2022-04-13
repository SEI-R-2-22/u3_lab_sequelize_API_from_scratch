'use strict'

const { Restaurant } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const lukes = await Restaurant.findAll({
      where: {
        restaurant_name: 'Lukes on Harlem'
      }
    })
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
      'employees',
      [
        {
          employeeName: 'Crystal Phillips',
          restaurantId: lukes[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Annmarie Loutos',
          restaurantId: lukes[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Nick Lopez',
          restaurantId: lukes[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Grace Benvenuti',
          restaurantId: fuji[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Ted Spector',
          restaurantId: fuji[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Edmond Honda',
          restaurantId: fuji[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Mike Cantanieri',
          restaurantId: jess[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Ryu Hyubasa',
          restaurantId: jess[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          employeeName: 'Joe Blow',
          restaurantId: jess[0].dataValues.id,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {})
  }
}
