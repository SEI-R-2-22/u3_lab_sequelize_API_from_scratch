'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Golfball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Golfball.belongsTo(models.Golfer, {
        foreignKey: 'golfer_id',
        as: 'golfer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Golfball.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.INTEGER,
      golferId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'golfer_id',
        onDelete: 'CASCADE',
        references: {
          model: 'golfers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Golfball',
      tableName: 'golfballs'
    }
  )
  return Golfball
}
