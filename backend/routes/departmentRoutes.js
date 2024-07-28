const express = require("express");
const router = express.Router();
const {
  getNewHiresCount,
  getDepartments,
  getTotalDepartments,
  addDepartment,
} = require("../controllers/departmentController");

// Define routes
router.get("/new-hires", getNewHiresCount);
router.get("/", getDepartments); 
router.get("/count", getTotalDepartments); 
router.post("/", addDepartment);

module.exports = router;
