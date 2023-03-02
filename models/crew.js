'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crew.belongsTo(models.Movie, {foreignKey: 'movieId'})
    }
  }
  Crew.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    shift: DataTypes.STRING,
    movieId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Crew',
    tableName: 'crews'
  });
  return Crew;
};