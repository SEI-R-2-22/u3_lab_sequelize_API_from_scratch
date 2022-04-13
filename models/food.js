'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.User, { foreignKey: 'listId' })
    }
  }
  Food.init({
    name: DataTypes.STRING,
    listId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'lists',
        key: 'id'
      }}
  }, {
    sequelize,
    modelName: 'Food',
    tableName: 'foods'
  });
  return Food;
};