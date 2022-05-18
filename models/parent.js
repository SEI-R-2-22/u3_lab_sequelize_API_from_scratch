'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parent.hasMany(models.Children, { foreignKey: 'parent_id' })
      Parent.belongsTo(models.School, { foreignKey: 'school_id' })
      // define association here
    }
  }
  Parent.init(
    {
      name: DataTypes.STRING,
      childrenCount: DataTypes.INTEGER,
      schoolId: {
        type: DataTypes.INTEGER,
        field: 'school_id',
        onDelete: 'CASCADE',
        references: {
          model: 'schools',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Parent',
      tableName: 'parents'
    }
  )
  return Parent
}
