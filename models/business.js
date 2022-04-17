'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.hasMany(models.Client, { foreignKey: 'clientId' })
    }
  }
  Business.init({
    branchLocation: DataTypes.STRING,
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'client_id',
      onDelete: 'CASCADE',
      references: {
        model: 'clients',
        key: id
      }
    }
  }, {
    sequelize,
    modelName: 'Business',
    tableName: 'businesses'
  });
  return Business;
};