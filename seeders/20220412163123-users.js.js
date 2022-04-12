'use strict'
const falso = require('@ngneat/falso')

const users = [...Array(30)].map(() => ({
  userName: falso.randUserName(),
  password: falso.randPassword(),
  email: falso.randEmail(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
