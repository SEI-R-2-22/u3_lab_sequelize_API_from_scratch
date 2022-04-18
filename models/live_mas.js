'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Live_Mas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Live_Mas.hasMany(models.Client, {foreignKey: 'clientId'})
    }
  }
  Live_Mas.init({
    branch_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Live_Mas',
    tableName: 'live_mases'
  });
  return Live_Mas;
};