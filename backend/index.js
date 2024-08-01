require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const employeeRoutes = require("./routes/employeeRoutes");
const activityRoutes = require("./routes/activityRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const announcementRoutes = require("./routes/announcementRoutes");
const eventRoutes = require("./routes/eventRoutes");
const supportRoutes = require("./routes/supportRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Our Backend Services!");
});

app.use("/api/employees", employeeRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api", eventRoutes);
app.use("/api", supportRoutes);
app.use("/api/profiles", profileRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Export the app for Vercel
module.exports = app;
