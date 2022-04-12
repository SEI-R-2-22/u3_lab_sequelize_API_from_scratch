'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Team, { foreignKey: 'teamId' })
      Player.hasMany(models.Comment, { foreignKey: 'playerId' })
    }
  }
  Player.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      position: DataTypes.STRING,
      teamId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'players'
    }
  )
  return Player
}
