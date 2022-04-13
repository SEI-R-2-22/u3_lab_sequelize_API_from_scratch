'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tournament.hasMany(models.Golfer, {
        foreignKey: 'tournament_id',
        as: 'golfers',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Tournament.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Tournament',
      tableName: 'tournaments'
    }
  )
  return Tournament
}
