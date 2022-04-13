'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Reply, { 
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      })
      User.hasMany(models.Question, { 
        foreignKey: 'userId',
        as: 'questions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      
      })

    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};