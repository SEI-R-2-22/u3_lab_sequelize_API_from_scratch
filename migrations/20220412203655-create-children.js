'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('childrens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      schoolId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'school_id',
        references: {
          model: 'schools',
          key: 'id'
        }
      },
      parentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'parent_id',
        references: {
          model: 'parents',
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('childrens')
  }
}
