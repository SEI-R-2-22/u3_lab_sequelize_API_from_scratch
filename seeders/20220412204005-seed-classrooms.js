'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('classrooms',
    [
      {
        roomNumber: 11,
        teacherName: 'Mrs. Campbell',
        schoolId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roomNumber: 22,
        teacherName: 'Dr. Progresso',
        schoolId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('classrooms', null, {})
  }
};

