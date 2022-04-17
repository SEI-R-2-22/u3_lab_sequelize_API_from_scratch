'use strict';
const { Client } = require('pg/lib');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Create_Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.belongsTo(models.Live_Mas, {foreignKey: 'clientId'})
      Client.hasMany(models.Pets, {foreignKey: 'clientId'})
    }
  }
  Create_Client.init({
    firstName: DataTypes.STRING,
    lastNAME: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients'
  });
  return Create_Client;
};