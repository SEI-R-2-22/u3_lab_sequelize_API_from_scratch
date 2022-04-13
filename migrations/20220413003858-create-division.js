'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('divisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      teams: {
        type: Sequelize.INTEGER
      },
      conference_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'conferences',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('divisions');
  }
};