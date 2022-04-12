'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Albums.belongsTo(models.Artist, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Albums.init({
    name: DataTypes.STRING,
    releaseDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Albums',
    tableName: 'albums'
  });
  return Albums;
};