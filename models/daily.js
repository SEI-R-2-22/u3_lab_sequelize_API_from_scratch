'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Daily.belongsTo(models.Ranch, {
        foreignKey: 'ranch_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Daily.belongsTo(models.Animal, {
        foreignKey: 'animal_id',
        onDelete: "CASCADE",
        onUpdate: 'CASCADE'
      })
    }
  }
  Daily.init({
    feeding: DataTypes.STRING,
    exercise: DataTypes.STRING,
    training: DataTypes.STRING,
    health: DataTypes.STRING,
    upkeep: DataTypes.STRING,
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'animal_id',
      onDelete: 'CASCADE',
      references: {
        model: 'animals',
        key: 'id'
      }
    },
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
    modelName: 'Daily',
    tableName: 'dailies'
  });
  return Daily;
};