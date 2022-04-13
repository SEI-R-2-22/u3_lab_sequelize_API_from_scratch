'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RaceList.belongsTo(models.CharacterSheet, { foreignKey: 'owner_id'})
    }
  }
  RaceList.init({
    raceName: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'charactersheets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'RaceList',
    tableName: 'racelists'
  });
  return RaceList;
};