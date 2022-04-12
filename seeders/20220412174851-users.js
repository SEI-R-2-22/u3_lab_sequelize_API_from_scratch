'use strict'
const falso = require('@ngneat/falso')

const users = [...Array(10)].map((user) => ({
  fullName: falso.randFullName({ withAccents: false }),
  email: falso.randEmail(),
  userName: falso.randUserName(),
  password: falso.randPassword({ size: 10 }),
  fullAddress: falso.randFullAddress({ includeCounty: false }),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', users, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
