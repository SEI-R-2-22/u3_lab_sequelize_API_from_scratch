"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Household extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Household.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Household.hasMany(models.Puppy, {
        foreignKey: "homeId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Household.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hasYard: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: "Household",
      tableName: 'households'
    }
  );
  return Household;
};
