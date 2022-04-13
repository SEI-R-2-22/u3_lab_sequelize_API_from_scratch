'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Children.belongsTo(models.Parent, { foreignKey: 'parent_id' })
      Children.belongsTo(models.School, { foreignKey: 'school_id' })
    }
  }
  Children.init(
    {
      name: DataTypes.STRING,
      schoolId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'school_id',
        references: {
          model: 'schools',
          key: 'id'
        }
      },
      parentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'parent_id',
        references: {
          model: 'parents',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Children',
      tableName: 'childrens'
    }
  )
  return Children
}
