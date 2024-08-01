// controllers/profileController.js
const Profile = require("../models/profile");

// Get all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ error: "Error fetching profiles" });
  }
};

// Get a profile by ID
exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new profile
exports.addProfile = async (req, res) => {
  const { phone_number, address, date_of_birth, gender } = req.body;

  try {
    const newProfile = await Profile.create({
      phone_number,
      address,
      date_of_birth,
      gender,
    });
    res.status(201).json(newProfile);
  } catch (error) {
    console.error("Error adding profile:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update an existing profile
exports.updateProfile = async (req, res) => {
  const { phone_number, address, date_of_birth, gender } = req.body;

  try {
    const profile = await Profile.findByPk(req.params.id);
    if (profile) {const Profile = require("../models/profile");

    // Get all profiles
    exports.getAllProfiles = async (req, res) => {
      try {
        const profiles = await Profile.findAll();
        res.json(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        res.status(500).json({ error: "Error fetching profiles" });
      }
    };

    // Get a profile by ID
    exports.getProfileById = async (req, res) => {
      try {
        const profile = await Profile.findByPk(req.params.id);
        if (profile) {
          res.status(200).json(profile);
        } else {
          res.status(404).json({ message: "Profile not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    // Add a new profile
    exports.addProfile = async (req, res) => {
      const { phone_number, address, date_of_birth, gender, employee_id } =
        req.body;

      try {
        const newProfile = await Profile.create({
          phone_number,
          address,
          date_of_birth,
          gender,
          employee_id,
        });
        res.status(201).json(newProfile);
      } catch (error) {
        console.error("Validation error:", error);
        res.status(500).json({ error: error.message });
      }
    };

    // Update an existing profile
    exports.updateProfile = async (req, res) => {
      const { phone_number, address, date_of_birth, gender, employee_id } =
        req.body;
      try {
        const profile = await Profile.findByPk(req.params.id);
        if (profile) {
          await profile.update({
            phone_number,
            address,
            date_of_birth,
            gender,
            employee_id,
          });
          res.status(200).json(profile);
        } else {
          res.status(404).json({ message: "Profile not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    // Delete a profile
    exports.deleteProfile = async (req, res) => {
      try {
        const profile = await Profile.findByPk(req.params.id);
        if (profile) {
          await profile.destroy();
          res.status(204).json();
        } else {
          res.status(404).json({ message: "Profile not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

      await profile.update({
        phone_number,
        address,
        date_of_birth,
        gender,
      });
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a profile
exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (profile) {
      await profile.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
