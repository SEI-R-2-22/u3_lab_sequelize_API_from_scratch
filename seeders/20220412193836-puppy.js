'use strict'
const { User, Household, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const puppies = await Promise.all(
      [...Array(80)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let house = await Household.findOne({
          where: { userId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          dogName: falso.randFirstName(),
          breed: falso.randDog(),
          shotsUpToDate: falso.randBoolean(),
          userId: user.id,
          homeId: house.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('puppies', puppies)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('puppies')
  }
}