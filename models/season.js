'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Season.belongsTo(models.Show, { foreignKey: 'showId' })
      Season.hasMany(models.Episode, { foreignKey: 'seasonId' })
    }
  }
  Season.init(
    {
      name: DataTypes.STRING,
      showId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'shows',
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
