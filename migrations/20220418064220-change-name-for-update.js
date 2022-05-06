module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn("mice", "updated_at", "updatedAt");
  },

  down: function (queryInterface, Sequelize) {
    //
  },
};
