'use strict';
const { User, Truck, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const reviews = await Promise.all(
      [...Array(1000)].map( async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        let truck = await Truck.findOne({
          order: sequelize.random(),
          where: { user_id: { [Op.not]: user.id } },
          raw: true
        })
        return {
          name: user.firstName,
          rating: falso.randNumber({ min: 1, max: 5 }),
          content: falso.randFirstName(),
          user_id: user.id,
          truck_id: truck.id
        }
      })
    )
    return queryInterface.bulkInsert('reviews', reviews)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete()
  }
};
