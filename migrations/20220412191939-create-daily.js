'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dailies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      feeding: {
        type: Sequelize.STRING
      },
      exercise: {
        type: Sequelize.STRING
      },
      training: {
        type: Sequelize.STRING
      },
      health: {
        type: Sequelize.STRING
      },
      upkeep: {
        type: Sequelize.STRING
      },
      animalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'animal_id',
        onDelete: 'CASCADE',
        references: {
          model: 'animals',
          key: 'id'
        }
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
    await queryInterface.dropTable('dailies');
  }
};