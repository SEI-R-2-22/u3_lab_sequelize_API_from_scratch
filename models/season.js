'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    static associate(models) {
      Season.belongsTo(models.Garden, {
        foreignKey: 'garden_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Season.init(
    {
      season: DataTypes.STRING,
      weather: DataTypes.STRING,
      gardenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'garden_id',
        onDelete: 'CASCADE',
        references: {
          model: 'gardens',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Season',
      tableName: 'seasons'
    }
  )
  return Season
}
