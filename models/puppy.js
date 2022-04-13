"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Puppy.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Puppy.belongsTo(models.Household, {
        foreignKey: "homeId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Puppy.init(
    {
      dogName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      breed: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      homeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'homeId',
        onDelete: 'CASCADE',
        references: {
          model: 'households',
          key: 'id'
        }
      },
      shotsUpToDate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Puppy",
      tableName: "puppies",
    }
  );
  return Puppy;
};
