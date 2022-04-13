'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Moves.belongsTo(models.Pokemon,{
        foreignKey:'pokemon_id',
        onDelete: 'CASCADE',
      })
    }
  }
  Moves.init({
    name: DataTypes.STRING,
    damage: DataTypes.STRING,
    type: DataTypes.STRING,
    pokemonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pokemon_id',
      onDelete: 'CASCADE',
      references: {
        model: 'pokemon',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Moves',
    tableName: 'moves'
  });
  return Moves;
};