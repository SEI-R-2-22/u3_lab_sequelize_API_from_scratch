'use strict'
const falso = require('@ngneat/falso')
const athletes = [...Array(50)].map(() => ({
  name: falso.randFullName(),
  
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('athletes', athletes)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('athletes')
  }
}
