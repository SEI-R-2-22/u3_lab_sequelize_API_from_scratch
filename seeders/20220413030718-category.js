'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      name: 'Old Fashioned',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Martini',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Daiquiri',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sidecar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Whisky Highball',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Flip',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
