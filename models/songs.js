'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Songs.belongsTo(models.Albums, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Songs.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Songs',
    tableName: 'songs'
  });
  return Songs;
};