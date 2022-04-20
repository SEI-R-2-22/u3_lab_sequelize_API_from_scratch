'use strict';
const falso = require('@ngneat/falso')

const movies = [...Array(20)].map(() => (
  {
    title: falso.randMovie(),
    description: falso.randLine({lineCount:3}),
    length: falso.randNumber({min:60,max:210}),
    rating: falso.rand(['G','PG','PG-13','R']),
    threeD: falso.randBoolean(),
  }
))

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('movies',movies)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('movies')
  }
};
