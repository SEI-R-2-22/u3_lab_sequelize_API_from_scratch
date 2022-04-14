'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sport.hasMany(models.Team, {
        foreignKey: 'sport_id'
      })
    }
  }
  Sport.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sport',
    tableName: 'sports'
  });
  return Sport;
};