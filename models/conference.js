'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conference.hasMany(models.Division, {
        foreignKey: 'conference_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Conference.hasMany(models.Team, {
        foreignKey: 'conference_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Conference.init({
    name: DataTypes.STRING,
    teams: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conference',
    tableName: 'conferences'
  });
  return Conference;
};