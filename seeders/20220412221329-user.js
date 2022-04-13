'use strict'

const falso = require('@ngneat/falso')
const users = [...Array(100)].map(() => ({
  firstName: falso.randFirstName(),
  lastName: falso.randLastName(),
  email: falso.randEmail(),
  userName: falso.randUserName(),
  password: falso.randPassword()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
}
