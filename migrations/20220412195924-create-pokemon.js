'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zoneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'zone_id',
        onDelete: 'CASCADE',
        references: {
          model: 'zones',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      moves: {
        type: Sequelize.STRING
      },
      health: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('pokemons');
  }
};