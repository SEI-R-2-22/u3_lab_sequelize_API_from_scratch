module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn("mice", "created_at", "createdAt");
  },

  down: function (queryInterface, Sequelize) {
    //
  },
};
