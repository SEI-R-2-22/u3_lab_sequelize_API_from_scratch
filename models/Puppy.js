'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puppy.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Puppy.belongsTo(models.HouseHold, {
        foreignKey: 'userId',
        as: 'household',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Puppy.init({
    dogName: DataTypes.STRING,
    breed: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    homeId: DataTypes.INTEGER,
    shotsUpToDate: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puppy',
    tabelName: 'puppies'
  });
  return Puppy;
};