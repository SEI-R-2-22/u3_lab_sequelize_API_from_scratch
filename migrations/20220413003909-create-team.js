'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      championships: {
        type: Sequelize.INTEGER
      },
      conference_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'conferences',
          key: 'id',
        }
      },
      division_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'divisions',
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
    await queryInterface.dropTable('teams');
  }
};