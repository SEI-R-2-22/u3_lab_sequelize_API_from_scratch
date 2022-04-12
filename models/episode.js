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
      Episode.belongsTo(models.Anime, { foreignKey: 'anime_id' })
    }
  }
  Episode.init(
    {
      title: DataTypes.STRING,
      animeId: {
        type: DataTypes.INTEGER,
        field: 'anime_id',
        references: {
          model: 'animes',
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
