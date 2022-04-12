'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'games',
      [
        {
          name: 'Assassins Creed',
          genre: 'Adventure',
          playerId: 1,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Halo',
          genre: 'Shooter',
          playerId: 2,
          gameId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('games', null, {})
  
  }
};
