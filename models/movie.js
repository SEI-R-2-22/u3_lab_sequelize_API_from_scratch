'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.Actor, {foreignKey: 'movieId'})
      Movie.hasMany(models.Crew, {foreignKey: 'movieId'})
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    runTime: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
  });
  return Movie;
};
