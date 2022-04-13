'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('golfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      ranking: {
        type: Sequelize.INTEGER
      },
      tournamentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'tournament_id',
        onDelete: 'CASCADE',
        references: {
          model: 'tournaments',
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('golfers')
  }
}
