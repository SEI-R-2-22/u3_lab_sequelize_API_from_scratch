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
      Team.belongsTo(models.Conference, {
        foreignKey: 'conference_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Team.belongsTo(models.Division, {
        foreignKey: 'devision_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Team.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    championships: DataTypes.INTEGER,
    conference_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'conferences',
        key: 'id'
      }
    },
    division_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'divisions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams'
  });
  return Team;
};