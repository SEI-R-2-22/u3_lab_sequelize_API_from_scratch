'use strict';
const { User, Truck, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const reviews = await Promise.all(
      [...Array(1000)].map( async () => {
        let user = await User.findOne({ order: sequelize.randome(), raw: true})
        let truck = await Truck.findOne({
          order: sequelize.random(),
          where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          name: user.firstName,
          rating: Math.floor(Math.random() * 5 +1),
          content: falso.randParagraph(),
          owner_id: user.id,
          truck_id: truck.id
        }
      })
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
