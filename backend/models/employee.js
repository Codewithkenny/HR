const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 
const Department = require("./department");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    date_of_hire: {
      type: DataTypes.DATE,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Department", 
        key: "id",
      },
    },
  },
  {
    tableName: "employees", 
    timestamps: false, 
  }
);

// Define the association
Employee.belongsTo(Department, { foreignKey: "department_id" });
Department.hasMany(Employee, { foreignKey: "department_id" });

module.exports = Employee;
