'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      childrenCount: {
        type: Sequelize.INTEGER
      },
      schoolId: {
        type: Sequelize.INTEGER,
        field: 'school_id',
        onDelete: 'CASCADE',
        references: {
          model: 'schools',
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
    await queryInterface.dropTable('parents')
  }
}
