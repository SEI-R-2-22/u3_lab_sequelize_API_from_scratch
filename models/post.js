'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey:'ownerId'})
    }
  }
  Post.init(
  {
    // id: DataTypes.INTEGER,
   content: DataTypes.STRING,
    // createdAt: DataTypes.STRING,
    ownerId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'users',
        key:'id'
        // primaryKey: true,
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};