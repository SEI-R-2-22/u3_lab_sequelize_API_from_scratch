'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pottery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pottery.belongsTo(models.Artist, {
        foreignKey: 'artist_id',
        as: 'artist',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Pottery.hasMany(models.Review, {
        foreignKey: 'pottery_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pottery.init(
    {
      name: DataTypes.STRING,
      types: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: 'Pottery',
      tableName: 'potteries'
    }
  )
  return Pottery
}
