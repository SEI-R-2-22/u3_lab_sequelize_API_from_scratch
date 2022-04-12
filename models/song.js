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
      // define association here
    }
  }
  Song.init({
    name: DataTypes.STRING,
    length: DataTypes.STRING,
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'artist_id',
      onDelete: 'CASCADE',
      references: {
        model: 'artistss',
        key: 'id'
      },
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'album_id',
      onDelete: 'CASCADE',
      references: {
        model: 'albums',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};