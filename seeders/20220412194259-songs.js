'use strict'
const { Albums, sequelize } = require('../models')
const falso = require('@ngneat/falso')
const artist = require('../models/artist')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const songs = await Promise.all(
      [...Array(400)].map(async () => {
        let albums = await Albums.findOne({ order: sequelize.random(), raw: true })
        return {
          name: falso.randFullName(),
          owner_id: albums.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('songs', songs)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('songs')
  }
}
