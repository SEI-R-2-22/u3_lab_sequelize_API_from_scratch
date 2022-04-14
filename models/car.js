'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.hasOne(models.Driver, { foreignKey: 'carId'})
      Car.belongsTo(models.CarDealer, { foreignKey: 'carDealerId' })
    }
  }
  Car.init({
    carBrand: DataTypes.STRING,
    carType: DataTypes.STRING,
    carPrice: DataTypes.INTEGER,
    carDealerId: {
      type: DataTypes.INTEGER,
      field: 'carDealerId',
      onDelete: 'CASCADE',
      reference: {
        model: 'car_dealers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars'
  });
  return Car;
};