'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [...Array(100)].map(() => ({
      firstName: falso.randFirstName(),
      lastName: falso.randLastName(),
      email: falso.randEmail(),
      username: falso.randUserName(),
      password: falso.randPassword()
    }))
    return queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
};
