'use strict'

const { User, sequelize, Product } = require('../models')
const falso = require('@ngneat/falso')
const { Op } = require('sequelize')
const product = require('../models/product')

module.exports = {
  async up(queryInterface, Sequelize) {
    const shoppingcart = await Promise.all(
      [...Array(30)].map(async () => {
        let user = await User.findOne({ order: sequelize.random() })
        // let product = await Product.findOne({ order: sequelize.random() })
        return {
          quantity: falso.randNumber(),
          price: falso.randNumber(),
          userId: user.id,
          // productId: product.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('shopping_carts', shoppingcart)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('shopping_carts')
  }
}
