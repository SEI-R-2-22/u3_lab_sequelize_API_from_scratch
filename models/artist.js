'use strict';
const {
  Model
} = require('sequelize');
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
        foreignKey: 'artist_id',
        as: 'albums',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Artist.hasMany(models.Song, {
        foreignKey: 'artist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listens: DataTypes.INTEGER,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists'
  });
  return Artist;
};