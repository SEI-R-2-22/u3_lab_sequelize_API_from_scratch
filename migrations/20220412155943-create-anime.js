'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      episodes: {
        type: Sequelize.INTEGER
      },
      producerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'producer_id',
        onDelete: 'CASCADE',
        references: {
          model: 'producers',
          key: 'id'
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('animes')
  }
}
