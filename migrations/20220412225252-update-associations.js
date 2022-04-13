'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('charactersheets', 'classId')
    await queryInterface.removeColumn('charactersheets', 'raceId')
    await queryInterface.addColumn(
      'classlists',
      'ownerId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    )
    await queryInterface.addColumn(
      'racelists',
      'ownerId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('charactersheets', 'classId')
    await queryInterface.addColumn('charactersheets', 'raceId')
    await queryInterface.removeColumn('racelists', 'ownerId')
    await queryInterface.removeColumn('classlists', 'ownerId')
  }
};
