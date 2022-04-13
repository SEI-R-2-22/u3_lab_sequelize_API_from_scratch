'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterSheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CharacterSheet.hasOne(models.ClassList, {
        foreignKey: 'classId',
        as: 'Class'
      })
      CharacterSheet.hasOne(models.RaceList, {
        foreignKey: 'raceId',
        as: 'Race'
      })
    }
  }
  CharacterSheet.init({
    charName: DataTypes.STRING,
    }, {
    sequelize,
    modelName: 'CharacterSheet',
    tableName: 'charactersheets'
  });
  return CharacterSheet;
};