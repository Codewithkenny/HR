// src/config/db.js
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:password@localhost:5432/talentconnekt"
);

module.exports = sequelize;
