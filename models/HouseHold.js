'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HouseHold extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HouseHold.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  HouseHold.init({
    address: DataTypes.STRING,
    hasYard: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HouseHold',
    tableName: 'HouseHolds'
  });
  return HouseHold;
};