"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plane", {
      name: {
        type: Sequelize.STRING,
      },
      airportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "airport_id",
        onDelete: "CASCADE",
        references: {
          model: "airports",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("plane");
  },
};
