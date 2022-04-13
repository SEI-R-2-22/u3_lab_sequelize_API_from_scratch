'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      School.hasMany(models.Classroom, {
        foreignKey: 'classroomId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      School.hasMany(models.Student, {
        foreignKey: 'schoolId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  School.init({
    name: DataTypes.STRING,
    typeOfSchool: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
    tableName: 'schools'
  });
  return School;
};