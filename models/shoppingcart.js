'use strict'
const { Model, INTEGER } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' })
      ShoppingCart.hasMany(models.Product, { foreignKey: 'shoppingCardId' })
    }
  }
  ShoppingCart.init(
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'ShoppingCart',
      tableName: 'shopping_carts'
    }
  )
  return ShoppingCart
}
