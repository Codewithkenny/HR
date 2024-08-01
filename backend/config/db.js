require("dotenv").config();
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance using the DATABASE_URL environment variable
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Adjust based on your SSL requirements
    },
  },
});

module.exports = sequelize;
