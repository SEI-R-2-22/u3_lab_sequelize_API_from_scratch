'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'rannio',
          password: '123456'
        },
        {
          username: 'wilson',
          password: 'merpmerp'
        },
        {
          username: 'harry',
          password: 'meepmeep'
        },
        {
          username: 'maria',
          password: 'beepbeep'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
