'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'players',
      [
        {
          firstName: 'Mag',
          lastName: 'Jo',
          email: 'mag@mag.com',
          password: 'dihdai12',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jay',
          lastName: 'Seph',
          email: 'jay@jay.com',
          password: 'efjwelkfjw138',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Webbie',
          lastName: 'Devie',
          email: 'web@dev.com',
          password: 'kljhjioy786',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('players', null, {})
  }
};
