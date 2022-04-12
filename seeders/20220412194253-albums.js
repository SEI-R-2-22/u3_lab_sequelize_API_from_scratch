'use strict'
const { Artist, sequelize } = require('../models')
const falso = require('@ngneat/falso')
const artist = require('../models/artist')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const albums = await Promise.all(
      [...Array(400)].map(async () => {
        let artists = await Artist.findOne({ order: sequelize.random(), raw: true })
        return {
          name: falso.randFullName(),
          releaseDate: falso.randRecentDate(),
          owner_id: artists.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('albums', albums)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('albums')
  }
}
