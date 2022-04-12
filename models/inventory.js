'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.hasMany(models.Car, {
        foreignKey: 'inventory_id',
        as: 'car',
        onDelete: 'cascade',
        upUpdate: 'cascase'
      })
      Inventory.hasMany(models.Bike, {
        foreignKey: 'inventory_id',
        as: 'bike',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      // define association here
    }
  }
  Inventory.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventories'
  });
  return Inventory;
};