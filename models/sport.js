'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sport.belongsTo(models.Athlete, { 
        foreignKey: 'athleteId',
        as: 'athlete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Sport.hasMany(models.Workout, {
        foreignKey: 'sportId',
        as: 'workout',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
        )
    }
  }
  Sport.init({
    sportName: DataTypes.STRING,
    athleteId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'athlete',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Sport',
    tableName: 'sports'
  });
  return Sport;
};