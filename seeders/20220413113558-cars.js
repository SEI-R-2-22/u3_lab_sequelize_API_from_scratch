'use strict';
const { CarDealer, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cars = await Promise.all(
      [...Array(100)].map(async () => {
        let car_dealer = await CarDealer.findOne({ order: sequelize.random(), raw: true })
        return {
          carBrand: falso.randVehicleModel(),
          carType: falso.randVehicleType(),
          carPrice: falso.randNumber({ min: 1000, max: 100000 }),
          carDealerId: car_dealer.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('cars', cars)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars')
  }
};