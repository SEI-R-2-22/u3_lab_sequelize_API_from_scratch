"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("divisions", [
      {
        name: "Atlantic Division",
        teams: 5,
        conference_id: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("conferences", null, {});
  },
};
