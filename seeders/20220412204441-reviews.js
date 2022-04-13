'use strict'
const { User, Products, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = await Promise.all(
      [...Array(1000)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let product = await Products.findOne({
          order: sequelize.random(),
          where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          likes: falso.randNumber({ min: 0, max: 3000 }),
          owner_id: user.id,
          product_id: product.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('reviews', reviews)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews')
  }
}
