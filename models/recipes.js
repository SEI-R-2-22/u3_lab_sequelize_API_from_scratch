'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes'
  });
  return Recipe;
};