'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pets.belongsTo(models.Client, { foreignKey: 'clientId'})
    }
  }
  Pets.init({
    petName: DataTypes.STRING,
    petBreed: DataTypes.STRING,
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
    modelName: 'Pets',
    tableName: 'pets'
  });
  return Pets;
};