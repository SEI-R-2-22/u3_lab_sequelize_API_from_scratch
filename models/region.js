'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Region.hasMany(models.Trainer, {
        foreignKey: 'region_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      Region.hasMany(models.Pokemon, {
        foreignKey: 'region_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Region.init(
    {
      name: DataTypes.STRING,
      id: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Region',
      tableName: 'regions'
    }
  )
  return Region
}
