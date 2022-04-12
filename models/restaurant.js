'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurant.hasMany(models.Employee, { foreignKey: 'restaurantId' })
      Restaurant.hasOne(models.Owner, { foreignKey: 'restaurantId' })
    }
  }
  Restaurant.init(
    {
      restaurantName: { type: DataTypes.STRING, field: 'restaurant_name' }
    },
    {
      sequelize,
      modelName: 'Restaurant',
      tableName: 'restaurants'
    }
  )
  return Restaurant
}
