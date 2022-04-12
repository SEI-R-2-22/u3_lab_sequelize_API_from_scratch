'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producer.hasMany(models.Anime, {
        as: 'animes',
        foreignKey: 'producer_id'
      })
    }
  }
  Producer.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Producer',
      tableName: 'producers'
    }
  )
  return Producer
}
