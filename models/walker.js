'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Walker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Walker.belongsTo(models.Dog, { foreignKey: dogId })
    }
  }
  Walker.init(
    {
      fullName: DataTypes.STRING,
      avatar: DataTypes.STRING,
      email: DataTypes.STRING,
      fullAddress: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Walker',
      tableName: 'walkers',
      dogId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'dogs',
          key: 'id'
        }
      }
    }
  )
  return Walker
}
