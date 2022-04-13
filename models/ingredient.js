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
      const Ingredient = sequelize.define('Ingredient', { name: DataTypes.STRING })
      Ingredient.belongsToMany(models.Recipe, { through: 'RecipeIngredients' })
    }
  }
  Ingredient.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'recipe_id',
      onDelete: 'CASCADE',
      references: {
        model: 'recipes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients'
  });
  return Ingredient;
};