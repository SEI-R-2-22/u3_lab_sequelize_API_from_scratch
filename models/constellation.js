'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Constellation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Constellation.hasMany(models.Star, { foreignKey: 'constellationId' })
    }
  }
  Constellation.init(
    {
      name: DataTypes.STRING,
      origin: DataTypes.STRING,
      meaning: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Constellation',
      tableName: 'constellations'
    }
  )
  return Constellation
}
