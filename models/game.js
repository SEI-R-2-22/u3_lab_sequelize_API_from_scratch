'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsTo(models.Player, {
        foreignKey: 'playerId',
        as: 'player',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Game.hasMany(models.Comment, {
        foreignKey: 'gameId',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Game.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games'
  });
  return Game;
};