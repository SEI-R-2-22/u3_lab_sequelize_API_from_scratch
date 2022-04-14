'use strict';
const { Car, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drivers = await Promise.all(
      [...Array(100)].map(async () => {
        let car = await Car.findOne({ order: sequelize.random(), raw: true })
        return {
          name: falso.randFirstName(),
          age: falso.randNumber({ min: 21, max: 70 }),
          carId: car.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('drivers', drivers)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('drivers')
  }
};