'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Truck.belongsToMany(models.User, {
        foreignKey: 'userId',
        as: 'subscriber',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Truck.init({
    name: DataTypes.STRING,
    openHour: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Truck',
    tableName: 'trucks'
  });
  return Truck;
};