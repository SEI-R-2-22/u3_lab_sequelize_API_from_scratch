'use strict';

module.exports = {
   up : async (queryInterface, Sequelize) =>{
      await queryInterface.bulkInsert('pokemons',
     [{
      name: 'Bulbasaur',
      moves: "Lots",
      health: 100,
      type: 'Grass',
      zone_id: 4,
      createdAt: new Date(),
      updatedAt:new Date(),
     },
     {
      name: 'Charmander',
      moves: "Lots",
      health: 100,
      type: 'Fire',
      zone_id: 4,
      createdAt: new Date(),
      updatedAt:new Date(),
     },
     {
      name: 'Squirtle',
      moves: "Lots",
      health: 100,
      type: 'Fire',
      zone_id: 4,
      createdAt: new Date(),
      updatedAt:new Date(),
     },
     {
      name: 'Chikorita',
      moves: "Lots",
      health: 100,
      type: 'Water',
      zone_id: 5,
      createdAt: new Date(),
      updatedAt:new Date(),
     },
     {
      name: 'Cyndaquil',
      moves: "Lots",
      health: 100,
      type: 'Grass',
      zone_id: 5,
      createdAt: new Date(),
      updatedAt:new Date(),
     },   
     {
      name: 'Totodile',
      moves: "Lots",
      health: 100,
      type: 'Water',
      zone_id: 5,
      createdAt: new Date(),
      updatedAt:new Date(),
     },

    ])
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

   down : async (queryInterface, Sequelize) =>{

    await queryInterface.bulkDelete('pokemons')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
