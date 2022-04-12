'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.belongsTo(models.Producer, {
        as: 'maker',
        foreignKey: 'producer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Anime.hasMany(models.Episode, { foreignKey: 'anime_id' })
    }
  }
  Anime.init(
    {
      title: DataTypes.STRING,
      episodes: DataTypes.INTEGER,
      producerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'producer_id',
        onDelete: 'CASCADE',
        references: {
          model: 'producers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Anime',
      tableName: 'animes'
    }
  )
  return Anime
}
