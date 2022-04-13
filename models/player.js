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
      Player.belongsTo(models.Team, { foreignKey: 'team_id', as: 'team' })
    }
  }
  Player.init(
    {
      name: DataTypes.STRING,
      teamId: {
        type: DataTypes.INTEGER,
        field: 'team_id',
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      position: DataTypes.STRING,
      jerseyNumber: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'players'
    }
  )
  return Player
}
