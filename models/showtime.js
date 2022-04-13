'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Showtime.belongsTo(models.Movie, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Showtime.belongsTo(models.Screen, {
        foreignKey: 'screenId',
        onUpdate: 'CASCADE'
      })
    }
  }
  Showtime.init({
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'movies',
        id: 'id'
      }
    },
    screenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'screens',
        id: 'id'
      }
    },
    date: {
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 20
    },
    soldout: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Showtime',
    tableName: 'showtimes'
  });
  return Showtime;
};