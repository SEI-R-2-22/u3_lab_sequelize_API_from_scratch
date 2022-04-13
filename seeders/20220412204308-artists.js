'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'artists',
      [
        {
          name: 'Ruthie the Dog',
          email: 'email',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ruthie the Truth',
          email: 'email',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {})
  }
}
