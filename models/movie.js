'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Showtime, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '(Description needed)'
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING
    },
    threeD: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });
  return Movie;
};