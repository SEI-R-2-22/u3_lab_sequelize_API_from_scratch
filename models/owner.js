'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Owner.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
    }
  }
  Owner.init(
    {
      ownerName: DataTypes.STRING,
      restaurantId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'restaurants',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Owner',
      tableName: 'owners'
    }
  )
  return Owner
}
