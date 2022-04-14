'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Driver.belongsTo(models.Car, { foreignKey: 'carId'})
    }
  }
  Driver.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    carId: {
      type: DataTypes.INTEGER,
      field: 'carId',
      onDelete: 'CASCADE',
      reference: {
        model: 'cars',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Driver',
    tableName: 'drivers'
  });
  return Driver;
};