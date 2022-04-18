"use strict";

const category = require("../models/category");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "mice",
      [
        {
          name: "G-Pro Wirless",
          description: "FPS god mouse",
          category_id: 14,
        },
        {
          name: "M575",
          description: "ugly and comfy",
          category_id: 15,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
