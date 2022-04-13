"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("conferences", [
      {
        name: "Eastern Conference",
        teams: 15,
      },
      {
        name: "Western Conference",
        teams: 15,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("conferences", null, {});
  },
};
