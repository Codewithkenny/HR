const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcementController");

// Route to get all announcements
router.get("/", announcementController.getAllAnnouncements);

// Route to create a new announcement
router.post("/", announcementController.createAnnouncement);

// Route to update an announcement
router.put("/:id", announcementController.updateAnnouncement);

// Route to delete an announcement
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
