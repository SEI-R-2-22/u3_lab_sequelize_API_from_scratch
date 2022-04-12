'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Property, {
        foreignKey: 'propetyId'
      })
      }
      // define association here
    }
    Address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    propertyId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'properties',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'adresses'

  });
  return Address;
};