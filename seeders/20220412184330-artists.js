'use strict';
const falso = require('@ngneat/falso');
const artists = [...Array(100)].map(()=> ({
  name: falso.randFirstName(),
  listens: falso.randNumber({ min: 1, max: 2000000}),
  bio: falso.randPhrase()
}))

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('artists', artists)
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('artists')
  }
};
