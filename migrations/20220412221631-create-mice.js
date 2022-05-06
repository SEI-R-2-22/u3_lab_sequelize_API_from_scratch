"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mice", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "category_id",
        onDelete: "CASCADE",
        references: {
          model: "categories",
          key: "id",
        },
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mice");
  },
};
