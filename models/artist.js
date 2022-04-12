'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Album, {
        foreignKey: 'artistId',
        as: 'albums',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Artist.hasMany(models.Track, {
        foreignKey: 'artistId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Artist.init(
    {
      artistName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Artist',
      tableName: 'artists'
    }
  )
  return Artist
}
