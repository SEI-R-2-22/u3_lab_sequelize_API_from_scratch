'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Routine.belongsTo(models.User, { foreignKey: 'userId' })
      Routine.hasMany(models.Movement, { foreignKey: 'routineId' })
    }
  }
  Routine.init(
    {
      title: DataTypes.STRING,
      targetRegion: DataTypes.STRING,
      trainingType: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Routine',
      tableName: 'routines'
    }
  )
  return Routine
}
