'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'recipe_id',
      onDelete: 'CASCADE',
      references: 'recipes',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients'
  });
  return Ingredient;
};