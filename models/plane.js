"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plane extends Model {
    static associate(models) {
      Plane.hasMany(models.Airport, {
        foreignKey: "airport_id",
        onDelete: "CASCADE",
      });
    }
  }
  Plane.init(
    {
      name: DataTypes.STRING,
      difficulty: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Plane",
      tableName: "planes",
    }
  );
  return Plane;
};
