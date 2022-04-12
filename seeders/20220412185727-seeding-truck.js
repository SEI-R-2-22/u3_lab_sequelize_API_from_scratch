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
          location: falso.randAddress(),
          rating: Math.floor(Math.random() * 5),
          userId: user.id
        }
      })
    )
    return queryInterface.bulkInsert('trucks', trucks)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('trucks')
  }
};
