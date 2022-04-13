'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('certificates', [{
      name: 'Developer Associate',
      picture: 'Fake Picture URL',
      organization: 'AWS',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('certificates', null, {});
  }
};
