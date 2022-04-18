"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    }),
      await queryInterface.changeColumn("categories", "updatedAt", {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    }),
      await queryInterface.changeColumn("categories", "updatedAt", {
        allowNull: false,
        type: Sequelize.DATE,
      });
  },
};
