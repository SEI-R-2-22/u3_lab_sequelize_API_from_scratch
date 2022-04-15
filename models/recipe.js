'use strict';
const {
  Model, STRING
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
      const Recipe = sequelize.define('recipe', { name: DataTypes.STRING })
      Recipe.belongsTo(models.Category)
      Recipe.belongsToMany(models.Ingredient, { through: 'RecipeIngredients' })
    }
  }
  Recipe.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ingredient: {
      allowNull: false,
      type: DataTypes.STRING
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes'
  });
  return Recipe;
};