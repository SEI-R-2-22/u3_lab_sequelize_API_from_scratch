'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.hasMany(models.Moves,{
        foreignKey:'pokemon_id',
        onDelete: 'CASCADE',
      })
      Pokemon.belongsToMany(models.Zone,{
        foreignKey:'zone_id',
        onDelete: 'CASCADE',
      })

      // define association here
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    moves: DataTypes.STRING,
    health: DataTypes.INTEGER,
    type: DataTypes.STRING,
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'zone_id',
      onDelete: 'CASCADE',
      references: {
        model: 'zones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName:'pokemons'
  });
  return Pokemon;
};