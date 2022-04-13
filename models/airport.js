"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      Airport.hasMany(models.airport, {
        foreignKey: "airport_id",
        onDelete: "CASCADE",
      });
    }
  }
  Airport.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Airport",
      tableName: "airport",
    }
  );
  return Airport;
};
