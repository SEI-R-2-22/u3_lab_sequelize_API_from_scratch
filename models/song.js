'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Band, {
        foreignKey: 'band_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Song.belongsTo(models.Album, {
        foreignKey: 'album_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Song.init({
    name: DataTypes.STRING,
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'album_id',
      onDelete: 'CASCADE',
      references: {
        model: 'albumss',
        key: 'id'
      }
    },
    bandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'band_id',
      onDelete: 'CASCADE',
      references: {
        model: 'bands',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
    tableName: 'songs'
  });
  return Song;
};