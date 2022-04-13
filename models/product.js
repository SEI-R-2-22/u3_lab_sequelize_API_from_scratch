'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'owner_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};