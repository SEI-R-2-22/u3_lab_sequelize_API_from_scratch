'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'crews',
    [
      {
        name: 'Simon Emanuel',
        position: 'Executive Producer',
        shift: '1',
        movieId: movie_id
      },
      {
        name: 'Toby Hefferman',
        position: 'Associate Producer',
        shift: '1',
        movieId: movie_id
      },
      {
        name: 'Greig Fraser',
        position: 'Director of Photography',
        shift: '3',
        movieId: movie_id
      },
      {
        name: 'David Crossman',
        position: 'Costume Designer',
        shift: '2',
        movieId: movie_id
      },
      {
        name: 'Kat Ali',
        position: '2',
        shift: 'Makeup Artist',
        movieId: movie_id
      }
    ], {}
  )
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('crews', null, {})
  }
};
