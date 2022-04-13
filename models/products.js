'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.User, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Products.hasMany(models.Reviews, {
        foreignKey: 'product_id',
        as: 'reviews',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
  }
}
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    ownerId: {
      type: DataTypes.INTEGER,
      onDelete: 'cascade',
      field: 'owner_id',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products'
  });
  return Products;
};