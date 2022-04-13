'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ranch.hasMany(models.Animal, {
        foreignKey: 'ranch_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Ranch.hasMany(models.Daily, {
        foreignKey: 'ranch_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Ranch.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    acreage: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ranch',
    tableName: 'ranches'
  });
  return Ranch;
};