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
      User.hasMany(models.Products, {
        foreignKey: 'owner_id',
        as: 'products',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Reviews, {
        foreignKey: 'owner_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};