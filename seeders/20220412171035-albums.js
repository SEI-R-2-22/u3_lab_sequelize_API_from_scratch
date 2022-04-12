'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'albums',
      [
        {
          albumName: 'Fraudulent Decades',
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: 'The Resignation',
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('albums', null, {})
  }
}
