'use strict';
const falso = require('@ngneat/falso')

const screens = [...Array(12)].map((a,i) => (
  {
    room: i+1,
    capacity: falso.randNumber({min:20,max:200}),
    recliners: falso.randNumber({min:8,max:120}),
    screenSize: `${falso.randNumber({min:10,max:100})} x ${falso.randNumber({min:100, max:400})}`,
    hasDolby: falso.randBoolean(),
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
   return queryInterface.bulkInsert('screens',screens)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('screens')
  }
};
