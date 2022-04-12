'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'tracks',
      [
        {
          trackName: 'If We Are',
          albumId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Paseo Nights',
          albumId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Toy Chairs',
          albumId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: "Congratulations, You've Died!",
          albumId: 1,
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Sell You Beautiful',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Prophetic',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Newsstand Rock(exposition)',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Overcome(with recapitulation)',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Never Slept So Soundly',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Taking Chase As The Serpent Slithers',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Republic',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Mastering The List',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Falling Down The Mountain',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Dinna-dawg(the inevitable onset of lunacy)',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Pal-treaux',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Decrescendo',
          albumId: 2,
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tracks', null, {})
  }
}
