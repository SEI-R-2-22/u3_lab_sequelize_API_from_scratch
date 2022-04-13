'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Reply.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'question',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  }
  Reply.init({
    content: DataTypes.STRING,
    questionId: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id'
      }
    },
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
    modelName: 'Reply',
    tableName: 'replies'
  });
  return Reply;
};