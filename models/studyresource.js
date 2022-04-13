'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudyResource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudyResource.belongsTo(models.Certificate, {
        foreignKey: 'cert_id',
        as: 'study',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  StudyResource.init({
    displayname: DataTypes.STRING,
    url: DataTypes.STRING,
    certId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cert_id',
      onDelete: 'CASCADE',
      references: {
        model: 'certificate',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'StudyResource',
    tableName: 'studyresources'
  });
  return StudyResource;
};