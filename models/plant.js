'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    static associate(models) {
      Plant.belongsTo(models.Garden, {
        foreignKey: 'garden_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Plant.init(
    {
      plantName: DataTypes.STRING,
      plantSeason: DataTypes.STRING,
      plantColor: DataTypes.STRING,
      plantType: DataTypes.STRING,
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
      modelName: 'Plant',
      tableName: 'plants'
    }
  )
  return Plant
}
