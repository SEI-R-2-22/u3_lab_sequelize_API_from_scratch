module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('foods','listId',{
      type:Sequelize.INTEGER
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('foods', 'listId');
  }
};