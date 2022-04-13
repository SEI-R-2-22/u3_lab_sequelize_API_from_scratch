'use strict'
const { User, Post, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await Promise.all(
      [...Array(1000)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let post = await Post.findOne({
          order: sequelize.random(),
          where: { creatorId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randLastName(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          creator_id: user.id,
          post_id: post.id
        }
      })
    )
    return queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments')
  }
}

