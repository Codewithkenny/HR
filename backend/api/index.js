require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const employeeRoutes = require("../routes/employeeRoutes");
const activityRoutes = require("../routes/activityRoutes");
const departmentRoutes = require("../routes/departmentRoutes");
const announcementRoutes = require("../routes/announcementRoutes");
const eventRoutes = require("../routes/eventRoutes");
const supportRoutes = require("../routes/supportRoutes");
const profileRoutes = require("../routes/profileRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// Routes
app.get("/api", (req, res) => {
  res.send("Welcome to Our Backend Services !");
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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;