'use strict';

const falso = require('@ngneat/falso')

const movies = [...Array(100)].map(() => ({
  name: falso.randMovie(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', movies)
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies')
  }
};
