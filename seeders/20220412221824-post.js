'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const post = await Promise.all(
      [...Array(400)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          content: falso.randFirstName(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          creator_id: user.id
        }
      })
    )
    return queryInterface.bulkInsert('posts', post)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts')
  }
}
