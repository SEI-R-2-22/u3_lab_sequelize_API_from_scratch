'use strict'
const falso = require('@ngneat/falso')
const artists = [...Array(100)].map(() => ({
  firstName: falso.randFirstName(),
  lastName: falso.randLastName(),
  createdAt: new Date(),
  updatedAt: new Date()
  
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', artists)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artists')
  }
}
