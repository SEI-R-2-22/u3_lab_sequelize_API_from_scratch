'use strict'

const { ShoppingCart, sequelize } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = await Promise.all(
      [...Array(50)].map(async () => {
        let cart = await ShoppingCart.findOne({ order: sequelize.random() })
        return {
          name: falso.randProductName(),
          price: falso.randNumber(),
          description: falso.randProductDescription(),
          brand: falso.randBrand(),
          category: falso.randProductCategory(),
          shoppingCartId: cart.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('products', products)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products')
  }
}
