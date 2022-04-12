'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          content: 'Love this game so much',
          playerId: 1,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
         content: 'Best Game ever!',
          playerId: 2,
          gameId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
  
};
