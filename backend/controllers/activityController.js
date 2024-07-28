const Activity = require("../models/Activity");

exports.getRecentActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      order: [["timestamp", "DESC"]],
      limit: 10, // Adjust the limit as needed
    });
    res.json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
};
