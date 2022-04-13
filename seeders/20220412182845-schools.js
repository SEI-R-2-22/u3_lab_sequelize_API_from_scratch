'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('schools',
    [
      {
        name: 'Alphabet Soup',
        typeOfSchool: 'High School',
        location: '123 AyeBeeSee Lane',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('schools', null, {})
  }
};
