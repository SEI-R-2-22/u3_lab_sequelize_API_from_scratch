'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.School, {
        foreignKey: 'schoolId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Student.belongsTo(models.Classroom, {
        foreignKey: 'classroomId',
        onDelete: "CASCADE",
        onUpdate: 'CASCADE'
      })
    }
  }
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'schools',
        key: 'id'
      }
    },
    classroomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'classrooms',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};