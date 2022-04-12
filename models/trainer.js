'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer.belongsTo(models.Region, {
        foreignKey: 'region_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Trainer.hasMany(models.Pokemon, {
        foreignKey: 'trainer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Trainer.init(
    {
      name: DataTypes.STRING,
      id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Trainer',
      tableName: 'trainers'
    }
  )
  return Trainer
}
