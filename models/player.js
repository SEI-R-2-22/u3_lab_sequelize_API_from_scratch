'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.hasMany(models.Game, {
        foreignKey: 'playerId',
        as: 'games',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Player.hasMany(models.Comment, {
        foreignKey: 'playerId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Player.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};