'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Player, {
        foreignKey: 'playerId',
        as: 'player',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comment.belongsTo(models.Game, {
        foreignKey: 'gameId',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};