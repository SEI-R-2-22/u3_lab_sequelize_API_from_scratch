"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("mice", "created_at", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("mice", "created_at", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
};
