'use strict';
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up (queryInterface, Sequelize) {
    const trucks = await Promise.all(
      [...Array(100)].map(async () => {
        
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        return {
          name: falso.randBrand(),
          openHour: '10AM-5PM',
          location: "123 Main Street",
          rating: falso.randNumber({ min: 1, max: 5 }),
          user_id: user.id
        }
      })
    )
    
    return queryInterface.bulkInsert('trucks', trucks)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('trucks')
  }
};
