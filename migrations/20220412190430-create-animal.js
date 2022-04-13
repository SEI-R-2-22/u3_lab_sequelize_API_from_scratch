'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animalName: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      ranchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ranch_id',
        onDelete: 'CASCADE',
        references: {
          model: 'ranches',
          key: 'id'
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('animals');
  }
};