'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'truck_id',
        as: 'owner',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Review.belongsTo(models.Truck, {
        foreignKey: 'truck_id',
        as: 'truck',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    truckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'truck_id',
      onDelete: 'CASCADE',
      references: {
        model: 'trucks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};