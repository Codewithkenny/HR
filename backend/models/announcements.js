const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Announcement = sequelize.define(
  "Announcement",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updatedAt",
    },
  },
  {
    timestamps: false,
    tableName: "announcements",
  }
);

module.exports = Announcement;
