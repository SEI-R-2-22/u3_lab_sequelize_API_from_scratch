'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Band.hasMany(models.Album, {
        foreignKey: 'band_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Band.hasMany(models.Song, {
        foreignKey: 'band_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Band.init({
    name: DataTypes.STRING,
    artists: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands'
  });
  return Band;
};