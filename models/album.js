'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, {
        foreignKey: 'artist_id',
        as: 'artist',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Album.hasMany(models.Song, {
        foreignKey: 'album_id',
        as: 'songs',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Album.init({
    name: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER,
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'artist_id',
      onDelete: 'CASCADE',
      references: {
        model: 'artists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'albums'
  });
  return Album;
};