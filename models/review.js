'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Artist, {
        foreignKey: 'artist_id',
        as: 'artist',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Review.belongsTo(models.Pottery, {
        foreignKey: 'pottery_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init(
    {
      content: DataTypes.STRING,
      artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'artist_id',
        onDelete: 'CASCADE',
        references: {
          model: 'artists',
          key: 'id'
        }
      },
      potteryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'pottery_id',
        onDelete: 'CASCADE',
        references: {
          model: 'potteries',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
