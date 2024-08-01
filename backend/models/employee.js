const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Department = require("./department"); 
const Profile = require("./profile"); 

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
        model: "departments",
        key: "id",
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profiles",
        key: "id",
      },
    },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

// Define associations
Employee.belongsTo(Department, { foreignKey: "department_id" });
Department.hasMany(Employee, { foreignKey: "department_id" });

Employee.belongsTo(Profile, { foreignKey: "profile_id" });
Profile.hasOne(Employee, { foreignKey: "profile_id" });

module.exports = Employee;
