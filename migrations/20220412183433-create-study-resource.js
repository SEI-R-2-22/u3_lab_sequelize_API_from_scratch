'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studyresources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayname: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      cert_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'cert_id',
      onDelete: 'CASCADE',
      references: {
        model: 'certificates',
        key: 'id'
      }
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studyresources');
  }
};