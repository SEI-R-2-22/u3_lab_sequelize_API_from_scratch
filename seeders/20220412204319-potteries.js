'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'potteries',
      [
        {
          name: 'Ruthie',
          types: 'Sculpture',
          description: 'Medium-sized sculpture of Ruthie the dog.',
          price: 'Free.99',
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('potteries', null, {})
  }
}
