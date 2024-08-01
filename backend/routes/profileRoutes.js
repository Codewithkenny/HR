const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// Get all profiles
router.get("/", profileController.getAllProfiles);

// Get a profile by ID
router.get("/:id", profileController.getProfileById);

// Add a new profile
router.post("/", profileController.addProfile);

// Update an existing profile
router.put("/:id", profileController.updateProfile);

// Delete a profile
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
