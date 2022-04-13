'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.belongsTo(models.Ranch, { 
        foreignKey: 'ranch_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Animal.hasMany(models.Daily, {
        foreignKey: 'animal_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Animal.init({
    animalName: DataTypes.STRING,
    species: DataTypes.STRING,
    sex: DataTypes.STRING,
    ranchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ranch_id',
      onDelete: 'CASCADE',
      references: {
        model: 'ranches',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'animals'
  });
  return Animal;
};