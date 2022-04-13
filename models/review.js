'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }

    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }

  }
  Review.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'owner_id',
      onDelete: 'CASCADE',
      references: {
        model: 'user',
        key: 'id'
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'movie_id',
      onDelete: 'CASCADE',
      references: {
        model: 'movie',
        key: 'id'
      }
    }
  },
    {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};