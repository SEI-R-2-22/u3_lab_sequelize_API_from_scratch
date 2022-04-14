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
      // define association here
      Player.belongsTo(models.Team, {
        foreignKey: 'team_id'
      })
    }
  }
  Player.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id'
      }}
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};