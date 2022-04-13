'use strict';

module.exports = {
  up :async(queryInterface, Sequelize) =>{
     await queryInterface.bulkInsert('zones',
    [{
      name:'Kanto',
      difficulty:'Easy',
      createdAt: new Date(),
      updatedAt:new Date(),
    },{
      name:'Johto',
      difficulty:'Hard',
      createdAt: new Date(),
      updatedAt:new Date(),
    }])
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

    return queryInterface.bulkDelete('zones')

   /**
    * Add commands to revert seed here.
    *
    * Example:
    * await queryInterface.bulkDelete('People', null, {});
    */
 }
};
