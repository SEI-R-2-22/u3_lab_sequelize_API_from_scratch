'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsTo(models.Show, { foreignKey: 'showId' })
      Episode.belongsTo(models.Season, { foreignKey: 'seasonId' })
    }
  }
  Episode.init(
    {
      name: DataTypes.STRING,
      length: DataTypes.STRING,
      showId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'shows',
          key: 'id'
        }
      },
      seasonId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'seasons',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Episode',
      tableName: 'episodes'
    }
  )
  return Episode
}
