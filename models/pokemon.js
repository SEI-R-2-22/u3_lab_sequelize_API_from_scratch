'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsTo(models.Trainer, {
        foreignKey: 'trainer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pokemon.init(
    {
      name: DataTypes.STRING,
      trainer: DataTypes.STRING,
      type: DataTypes.STRING,
      region: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Pokemon',
      tableName: 'pokemon'
    }
  )
  return Pokemon
}
