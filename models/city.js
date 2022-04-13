'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.belongsTo(models.Team, { foreignKey: 'team_id', as: 'team' })
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      teamId: {
        type: DataTypes.INTEGER,
        field: 'team_id',
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities'
    }
  )
  return City
}
