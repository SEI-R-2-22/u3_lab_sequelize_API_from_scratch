'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Certificate.hasMany(models.Comment, {
        foreignKey: 'cert_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Certificate.hasMany(models.StudyResource, {
        foreignKey: 'cert_id',
        as: 'study',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Certificate.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certificate',
    tableName: "certificates"
  });
  return Certificate;
};