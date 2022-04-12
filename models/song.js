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
      Song.belongsTo(models.Album, { foreignKey: 'albumId' })
    }
  }
  Song.init({
    name: DataTypes.STRING,
    albumId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'albums',
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