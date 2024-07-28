const sequelize = require("../config/db");
const Employee = require("./employee");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Set force: true to drop and recreate tables
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
};

syncDatabase();
