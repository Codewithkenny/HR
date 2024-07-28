const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 

const Activity = sequelize.define(
  "Activity",
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "activities", 
    timestamps: false,
  }
);

module.exports = Activity;
