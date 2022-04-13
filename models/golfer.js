'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Golfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Golfer.belongsTo(models.Tournament, {
        foreignKey: 'tournament_id',
        as: 'tournament',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Golfer.hasOne(models.Golfball, {
        foreignKey: 'golfer_id',
        as: 'golfer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Golfer.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      ranking: DataTypes.INTEGER,
      tournamentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'tournament_id',
        onDelete: 'CASCADE',
        references: {
          model: 'tournaments',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Golfer',
      tableName: 'golfers'
    }
  )
  return Golfer
}
