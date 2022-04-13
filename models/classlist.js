'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClassList.belongsTo(models.CharacterSheet, {foreignKey: 'owner_id'})
    }
  }
  ClassList.init({
    className: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      field: 'owner_id',
      references: {
        model: 'charactersheets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ClassList',
    tableName: 'classlists'
  });
  return ClassList;
};