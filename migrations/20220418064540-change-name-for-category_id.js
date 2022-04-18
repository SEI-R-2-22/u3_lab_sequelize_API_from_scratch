"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn("mice", "category_id", "categoryId");
  },

  down: function (queryInterface, Sequelize) {
    //
  },
};
