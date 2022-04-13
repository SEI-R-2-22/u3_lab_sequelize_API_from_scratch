'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      likes: {
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: DataTypes.INTEGER,
        onDelete: 'cascade',
        field: 'owner_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'users',
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
    await queryInterface.dropTable('reviews');
  }
};