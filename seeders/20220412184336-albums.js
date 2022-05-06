'use strict';
const { Artist, sequelize } = require('../models')
const falso = require('@ngneat/falso');

module.exports = {
  async up (queryInterface, Sequelize) {
    const albums = await Promise.all(
      [...Array(500)].map(async () => {
        let artist = await Artist.findOne({ order: sequelize.random(), raw: true})
        return {
          name: falso.randPhrase(),
          coverImage: falso.randImg(),
          releaseDate: falso.randNumber({ min: 1950, max: 2022 }),
          artist_id: artist.id
        }
      })
    )
    return queryInterface.bulkInsert('albums', albums)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('albums')
  }
};
