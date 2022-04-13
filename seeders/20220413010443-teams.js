"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("teams", [
      {
        name: "Celtics",
        city: "Boston",
        championships: 17,
        conference_id: 1,
        division_id: 1,
      },
      {
        name: "76ers",
        city: "Philadelphia",
        championships: 3,
        conference_id: 1,
        division_id: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("conferences", null, {});
  },
};
