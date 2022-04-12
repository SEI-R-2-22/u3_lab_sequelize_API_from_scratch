'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Star.belongsTo(models.Constellation, { foreignKey: 'constellationId' })
    }
  }
  Star.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      lightYears: DataTypes.STRING,
      constellationId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: 'constellations',
        key: 'id'
      }
    },
    {
      sequelize,
      modelName: 'Star',
      tableName: 'stars'
    }
  )
  return Star
}
