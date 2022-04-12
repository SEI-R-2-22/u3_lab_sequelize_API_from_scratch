'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ingredients.init({
    name: DataTypes.STRING,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingredients',
  });
  return ingredients;
};