'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bike.belongsTo(models.Inventory, {
        foreignKey: 'inventory_id',
        as: 'bike',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // define association here
    }
  }
  Bike.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,


  inventoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'inventory_id',
    onDelete: 'CASCADE',
    references: {
      model: 'inventories',
      key: 'id'
    }}
  },
  {
    sequelize,
    modelName: 'Bike',
    tableName: 'bikes'
  });
  return Bike;
};