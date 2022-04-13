'use strict';

module.exports = {
  up :async(queryInterface, Sequelize) =>{
    await queryInterface.bulkInsert('moves',
    [{name: 'Nailflick',
    damage: 10,
    type: 'Normal',
    pokemon_id: 14,
    createdAt: new Date(),
    updatedAt:new Date(),},
    {name: 'Fire Spin',
    damage: 100,
    type: 'Fire',
    pokemon_id: 17,    
    createdAt: new Date(),
    updatedAt:new Date(),},
    {name: 'Burn Down',
    damage: 200,
    type: 'Fire',
    pokemon_id: 18,
    createdAt: new Date(),
    updatedAt:new Date(),},
    {name: 'Combustion',
    damage: 30,
    type: 'Fire',
    pokemon_id: 14,
    createdAt: new Date(),
    updatedAt:new Date(),}])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },


  down :async(queryInterface, Sequelize) =>{

    return queryInterface.bulkDelete('moves')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
