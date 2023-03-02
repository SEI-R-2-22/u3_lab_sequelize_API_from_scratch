'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: 'favorites' }),
        Favorite.hasMany(models.Post, { foreignKey: 'id' })
    }
  }
  Favorite.init({
    userId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'users',
        key: 'id'
      }
    },
    favorites: {
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        reference: {
          model: 'posts',
          key: 'id'
        }
      }),
    }
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites'
  });
  return Favorite;
};