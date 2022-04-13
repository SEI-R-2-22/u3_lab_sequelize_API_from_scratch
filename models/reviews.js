'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.User, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Reviews.belongsTo(models.Products, {
        foreignKey: 'product_id',
        as: 'products',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Reviews.init({
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    ownerId: {
      type: DataTypes.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'products',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    tableName: 'reviews'
  });
  return Reviews;
};