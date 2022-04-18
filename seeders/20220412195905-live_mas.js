'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert(
     'live_mas',
     [
       {
         branch_name: 'Anaheim',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ], {}
   )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('live_mas', null, {})
  }
};
