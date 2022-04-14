'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.belongsTo(models.Sport, {
        foreignKey: 'sport_id'
      })
      Team.hasMany(models.Player, {
        foreignKey: 'team_id'
      })
    }
  }
  Team.init({
    name: DataTypes.STRING,
    sport_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sports',
        key: 'id'
      }}
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams'
  });
  return Team;
};