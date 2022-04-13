'use strict'
const { User, Question, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const replies = await Promise.all(
      [...Array(1000)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let question = await Question.findOne({
          order: sequelize.random(),
          where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          UserId: user.id,
          questionid: question.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('replies', replies)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('replies')
  }
}
