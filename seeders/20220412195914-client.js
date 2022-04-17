'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'clients',
      [
        {
          firstName: 'Mark',
          lastName: 'Ryan',
          email: 'markrryan99@gmail.com',
          phone: 9544566543
        },
        {
          firstName: 'Jennifer',
          lastName: 'Hopper',
          email: 'missmissjenn@gmail.com',
          phone: 9584466965
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clients', null, {})
  }
};
