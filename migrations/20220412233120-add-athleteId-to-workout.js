'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('workouts', 'athleteId',{
     type: Sequelize.INTEGER,
     onDelete: 'CASCADE',
     onUpdate: 'CASCADE',
     references: {
       model: 'athletes',
       key:'id'
     }
   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('workouts', 'athleteId')
  }
};