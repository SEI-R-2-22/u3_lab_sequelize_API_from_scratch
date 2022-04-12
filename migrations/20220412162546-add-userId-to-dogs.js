'use strict'

const { query } = require('express')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('dogs', 'userId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('dogs', 'userId')
  }
}
