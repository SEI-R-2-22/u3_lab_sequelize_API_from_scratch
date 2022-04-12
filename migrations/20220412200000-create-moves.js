'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      damage: {
        type: Sequelize.STRING
      },
      pokemonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'pokemon_id',
        onDelete: 'CASCADE',
        references: {
          model: 'pokemons',
          key: 'id'
        }
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
    await queryInterface.dropTable('moves');
  }
};