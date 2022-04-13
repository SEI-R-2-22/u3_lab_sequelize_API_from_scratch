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
      Artist.hasMany(models.Pottery, {
        foreignKey: 'artist_id',
        as: 'pottery',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Artist.hasMany(models.Review, {
        foreignKey: 'artist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Artist.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Artist',
      tableName: 'artists'
    }
  )
  return Artist
}
