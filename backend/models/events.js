const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define(
  "Event",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    timestamps: false, 
    tableName: "events",
  }
);

module.exports = Event;
