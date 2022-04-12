'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tenant.belongsTo(models.Property, {
        foreignKey: 'propertyId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Tenant.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
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
    modelName: 'Tenant',
    tableName: 'tenants'
  });
  return Tenant;
};