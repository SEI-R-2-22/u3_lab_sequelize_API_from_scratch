'use strict';

const { User, Movie, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')

module.exports = {
  up : async (queryInterface, Sequelize) => {
    const reviews = await Promise.all(
      [...Array(1000)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let movie = await Movie.findOne({ 
          order: sequelize.random(),
          // where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          owner_id: user.id,
          movie_id: movie.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('reviews', reviews)
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews')
  }
};
