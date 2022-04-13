'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classroom.belongsTo(models.School, { 
        foreignKey: 'schoolId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Classroom.hasMany(models.Student, {
        foreignKey: 'classroomId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Classroom.init({
    roomNumber: DataTypes.INTEGER,
    teacherName: DataTypes.STRING,
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'schools',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Classroom',
    tableName: 'classrooms'
  });
  return Classroom;
};