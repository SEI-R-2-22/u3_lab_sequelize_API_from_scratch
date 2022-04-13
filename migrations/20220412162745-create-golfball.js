'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('golfballs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      golferId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'golfer_id',
        onDelete: 'CASCADE',
        references: {
          model: 'golfers',
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
    await queryInterface.dropTable('golfballs')
  }
}
