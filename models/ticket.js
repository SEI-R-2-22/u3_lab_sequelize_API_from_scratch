"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      Ticket.belongsToMany(models.Airport, {
        foreignKey: "airport_id",
        onDelete: "CASCADE",
      });
    }
  }
  Ticket.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      airportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "airport_id",
        onDelete: "CASCADE",
        references: {
          model: "airport",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Ticket",
      tableName: "ticket",
    }
  );
  return Ticket;
};
