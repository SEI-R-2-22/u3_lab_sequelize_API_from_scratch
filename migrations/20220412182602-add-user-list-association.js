module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('lists','userId',{
      type:Sequelize.INTEGER
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('lists', 'userId');
  }
};