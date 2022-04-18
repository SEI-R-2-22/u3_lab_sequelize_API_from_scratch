"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mouse.belongsTo(models.Category),
        {
          foreign_key: "category_id",
          onDelete: "cascade",
          onUpdate: "cascade",
        };
      Mouse.hasOne(models.Inventory, {
        foreign_key: "mouse_id",
        as: "stock",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      // define association here
    }
  }
  Mouse.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mouse",
      tableName: "mice",
    }
  );
  return Mouse;
};
