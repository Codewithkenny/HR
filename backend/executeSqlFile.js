// const { Client } = require("pg");
// const fs = require("fs");
// const path = require("path");

// const client = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "password", 
//   database: "talentconnekt",
// });

// async function executeSqlFile(filePath) {
//   const sql = fs.readFileSync(filePath).toString();
//   try {
//     await client.connect();
//     await client.query(sql);
//     console.log("SQL file executed successfully");
//   } catch (err) {
//     console.error("Error executing SQL file:", err);
//   } finally {
//     await client.end();
//   }
// }

// executeSqlFile(path.join(__dirname, "employees.sql"));
