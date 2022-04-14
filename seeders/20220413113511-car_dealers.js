'use strict';
const falso = require('@ngneat/falso')
const car_dealers = [...Array(100)].map(() => ({
  storeName: falso.randCompanyName(),
  location: falso.randStreetName(),
  manager: falso.randFirstName(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('car_dealers', car_dealers)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('car_dealers')
  }
};
