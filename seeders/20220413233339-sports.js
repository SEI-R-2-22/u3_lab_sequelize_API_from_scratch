'use strict';
const falso = require('@ngneat/falso')
const sports = [...Array(10)].map(() => ({
  name: falso.randSports(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sports', sports)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sports')
  }
}