'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.User, { 
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      
      })
      Question.hasMany(models.Reply, {
        foreignKey: 'questionId',
        as: 'replies'
      
      })
    }
  }
  Question.init({
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions'
  });
  return Question;
};