const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Support = sequelize.define(
  "Support",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "support", 
    underscored: true, 
    timestamps: true, 
  }
);

module.exports = Support;
