'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarDealer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarDealer.hasMany(models.Car, { foreignKey: 'carDealerId' })
    }
  }
  CarDealer.init({
    storeName: DataTypes.STRING,
    location: DataTypes.STRING,
    manager: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarDealer',
    tableName: 'car_dealers'
  });
  return CarDealer;
};