'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsTo(models.Movie, {foreignKey: 'movieId'})
    }
  }
  Actor.init({
    characterName: DataTypes.STRING,
    realName: DataTypes.STRING,
    position: DataTypes.STRING,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actors'
  });
  return Actor;
};