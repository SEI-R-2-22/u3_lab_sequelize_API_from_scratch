'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workout.belongsTo(models.Sport, { 
        foreignKey: 'sportId',
        as: 'workout',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        
      })
      Workout.belongsTo(models.Athlete, { 
        foreignKey: 'athleteId',
        as: 'athlete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE' } )
    }
  }
  Workout.init({
    exerciseName: DataTypes.STRING,
    durationMinutes: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    sportId:  {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'sport',
        key: 'id'
      }
    },  
    athleteId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'athletes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'workouts'
  });
  return Workout;
};