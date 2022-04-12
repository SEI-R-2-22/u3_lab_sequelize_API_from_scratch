'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Genre.init({
    genre_name: DataTypes.STRING,
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Genre',
    tableName: 'genres'
  });
  return Genre;
};