"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.Mouse, {
        foreignKey: "mouse_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Inventory.init(
    {
      MouseId: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      returned: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inventory",
      tableName: "inventoryList",
    }
  );
  return Inventory;
};
