'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Screen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Screen.hasMany(models.Showtime, {
        foreignKey: 'screenId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Screen.init({
    room: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
      validate: {
        min: 0
      }
    },
    recliners: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    screenSize: {
      type: DataTypes.STRING
    },
    hasDolby: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Screen',
    tableName: 'screens'
  });
  return Screen;
};