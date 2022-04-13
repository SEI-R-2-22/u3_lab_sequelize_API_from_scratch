'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Division.belongsTo(models.Conference, {
        foreignKey: 'conference_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Division.init({
    name: DataTypes.STRING,
    teams: DataTypes.INTEGER,
    conference_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'conferences',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Division',
    tableName: 'divisions'
  });
  return Division;
};