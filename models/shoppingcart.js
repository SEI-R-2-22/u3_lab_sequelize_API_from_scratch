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
      // ShoppingCart.belongsToMany(models.Product, { through: Shopping_Product })
    }
  }
  ShoppingCart.init(
    {
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
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
