'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here`
      Zone.hasMany(models.Pokemon,{
        foreignKey:'id',
        onDelete: 'CASCADE',
      })
    }
  }
  Zone.init({
    name: DataTypes.STRING,
    difficulty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Zone',
    tableName:'zones'

  });
  return Zone;
};