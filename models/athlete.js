'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Athlete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Athlete.hasOne(models.Sport, {
       foreignKey: 'athleteId',
       as: 'sport',
       onDelete: 'CASCADE',
       onUpdate: 'CASCADE'
      })
      Athlete.hasMany(models.Workout, {
      foreignKey: 'athleteId',
      as: 'workout',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
      })
    }
  }
  Athlete.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Athlete',
    tableName: 'athletes'
  });
  return Athlete;
};