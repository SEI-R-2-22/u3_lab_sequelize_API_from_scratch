'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
    }
  }
  Employee.init(
    {
      employeeName: DataTypes.STRING,
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
      modelName: 'Employee',
      tableName: 'employees'
    }
  )
  return Employee
}
