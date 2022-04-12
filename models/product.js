'use strict'
const { Model } = require('sequelize')
const ShoppingCart = require('./shoppingcart')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.ShoppingCart, {
        foreignKey: 'shoppingCartId',
        as: 'cart'
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      brand: DataTypes.STRING,
      category: DataTypes.STRING,
      shoppingCartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'shopping_carts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products'
    }
  )
  return Product
}
