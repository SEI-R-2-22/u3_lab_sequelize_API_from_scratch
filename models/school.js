'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      School.hasMany(models.Parent, { foreignKey: 'school_id' })
      School.hasMany(models.Children, { foreignKey: 'school_id' })
      // define association here
    }
  }
  School.init(
    {
      name: DataTypes.STRING,
      population: DataTypes.INTEGER,
      uniform: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'School',
      tableName: 'schools'
    }
  )
  return School
}
