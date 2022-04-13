'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ingredients', [{
      name: 'Evan Williams "Black Label" bourbon',
      recipe_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Plymouth gin',
      recipe_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Tanqueray gin',
      recipe_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Flor de Cana 4-year white rum',
      recipe_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Campo de Encanto Grand and Noble pisco',
      recipe_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Pierre Ferrand Ambre Cognac',
      recipe_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Siembra Azul blanco tequila',
      recipe_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ingredients', null, {});
  }
};