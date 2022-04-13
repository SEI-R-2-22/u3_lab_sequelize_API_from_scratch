'use strict';
const falso = require('@ngneat/falso');

const bands = [...Array(3)].map(() => ({
  name: falso.randFirstName(),
  artists: falso.randPassword(),

}))
module.exports = {
  up : async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', bands)
     
  },

  down : async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bands', null, {});
  }
};