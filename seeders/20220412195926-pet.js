'use strict';
const { User, sequelize, Sequelize } = require('../models')
const falso = require('@ngneat/falso');
const { Client } = require('pg/lib');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pets = await Promise.all(
      [...Array(12)].map(async () => {
        let client = await Client.findOne({ order: sequelize.random(), raw:true })
        return {
          content: falso.randDog(),
          client_id: client.id
        }
      })
    )
    return queryInterface.bulkInsert('pets', pets)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pets')
  
  }
};
