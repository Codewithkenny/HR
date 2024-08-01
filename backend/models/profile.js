const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Employee = require("./employee"); 

const Profile = sequelize.define(
  "Profile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "profiles",
    timestamps: false,
  }
);

// Define associations
// Profile.hasOne(Employee, { foreignKey: "profile_id" });
// Employee.belongsTo(Profile, { foreignKey: "profile_id" });

module.exports = Profile;
