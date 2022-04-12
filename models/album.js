'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.hasMany(models.Song, {
        foreignKey: 'album_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Album.belongsTo(models.Band, {
        foreignKey: 'band_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Album.init({
    name: DataTypes.STRING,
    songs: DataTypes.INTEGER,
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
    modelName: 'Album',
    tableName: 'ablums'
  });
  return Album;
};