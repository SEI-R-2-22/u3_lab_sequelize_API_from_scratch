'use strict'
const { Model, INET } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.belongsTo(models.User, { foreignKey: userId })
    }
  }
  Dog.init(
    {
      breed: DataTypes.STRING,
      firstName: DataTypes.STRING,
      walkFreq: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Dog',
      tableName: 'dogs'
    }
  )
  return Dog
}
