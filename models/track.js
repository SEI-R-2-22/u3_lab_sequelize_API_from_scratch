'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsTo(models.Artist, {
        foreignKey: 'artistId',
        as: 'artist',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Track.belongsTo(models.Album, {
        foreignKey: 'albumId',
        as: 'tracks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Track.init(
    {
      trackName: DataTypes.STRING,
      albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'albumId',
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      },
      artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'artistId',
        onDelete: 'CASCADE',
        references: {
          model: 'artists',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Track',
      tableName: 'tracks'
    }
  )
  return Track
}
