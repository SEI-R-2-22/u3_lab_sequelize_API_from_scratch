'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'movies',
      [
        {
          title: 'Death on the Nile',
          runTime: '127 minutes',
          genre: 'Mystery'
        },
        {
          title: 'The Batman',
          runTime: '167 minutes',
          genre: 'Action'
        },
        {
          title: 'Sonic the Hedgehog 2',
          runTime: '122 minutes',
          genre: 'Comedy'
        },
        {
          title: 'Moonfall',
          runTime: '120 minutes',
          genre: 'Action'
        },
        {
          title: 'The Lost City',
          runTime: '112 minutes',
          genre: 'Adventure'
        }
      ], {}
    )

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
