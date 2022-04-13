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
      Recipe.belongsTo(models.Category)
      const Recipe = sequelize.define('Recipe', { name: DataTypes.STRING })
      Recipe.belongsToMany(models.Ingredient, { through: 'RecipeIngredients' })
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