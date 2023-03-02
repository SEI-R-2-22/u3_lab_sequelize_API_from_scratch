'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'actors',
      [
        {
          characterName: 'Batman',
          realName: 'Robert Pattinson',
          position: 'Lead Role',
          movieId: movie_Id
        },
        {
          characterName: 'Selina Kyle',
          realName: 'Zoe Kravitz',
          position: 'Lead Role',
          movieId: movie_Id
        },
        {
          characterName: 'Linnet Ridgeway',
          realName: 'Gal Gadot',
          position: 'Lead Role',
          movieId: movie_Id
        },
        {
          characterName: 'Bouc',
          realName: 'Tom Bateman',
          position: 'Supporting Actor',
          movieId: movie_Id
        },
        {
          characterName: 'Jocinda Fowler',
          realName: 'Halle Berry',
          position: 'Lead Role',
          movieId: movie_Id
        }
      ], {}
    )

  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actors', null, {})
  }
};