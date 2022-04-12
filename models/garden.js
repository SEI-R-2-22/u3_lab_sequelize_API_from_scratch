'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    static associate(models) {
      Garden.hasOne(models.Season, {
        foreignKey: 'garden_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Garden.hasMany(models.Plant, {
        foreignKey: 'garden_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Garden.init(
    {
      gardenType: DataTypes.STRING,
      dirtType: DataTypes.STRING,
      plantType: DataTypes.STRING,
      waterSchedule: DataTypes.STRING,
      plantCount: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Garden',
      tableName: 'gardens'
    }
  )
  return Garden
}
