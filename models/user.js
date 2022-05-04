'use strict';
const { user } = require('pg/lib/defaults');
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
      User.hasMany(models.Post, { foreignKey:'ownerId'})
      User.hasMany(models.Comment, { foreignKey:'ownerId'})
    }
  }
  User.init(
   {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false
    // },
    userName: {
       type: DataTypes.STRING,
       allowNull: false
    }
   }, 
   {
    sequelize,
    modelName: 'User',
    tableName: 'users'
   });
  return User;
};