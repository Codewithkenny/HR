
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Department = sequelize.define(
  "Department",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "departments",
    timestamps: false, 
  }
);

module.exports = Department;
