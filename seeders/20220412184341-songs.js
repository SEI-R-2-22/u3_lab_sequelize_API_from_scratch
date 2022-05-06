'use strict';
const { Artist, Album, sequelize } = require('../models')
const {  Op } = require('sequelize')
const falso = require('@ngneat/falso');

module.exports = {
  async up (queryInterface, Sequelize) {
    const songs = await Promise.all(
      [...Array(2500)].map(async () => {
        let artist = await Artist.findOne({ order: sequelize.random(), raw: true })
        let album = await Album.findOne({
          where: { artistId: { [Op.not]: artist.id } },
          raw: true
        })
        return {
          name: falso.randSong(),
          length: `${falso.randNumber({ min: 1, max: 9})} minutes ${falso.randNumber({ min: 0, max: 59})} seconds`,
          artist_id: artist.id,
          album_id: album.id
        }
      })
    )
    return queryInterface.bulkInsert('songs', songs)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('songs')
  }
};
