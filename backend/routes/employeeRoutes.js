const express = require("express");
const {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getTotalEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

// Get all employees with profiles
router.get("/", getAllEmployees);

// Get the total number of employees
router.get("/count", getTotalEmployees);

// Get an employee by ID with profile
router.get("/:id", getEmployeeById);

// Add a new employee
router.post("/", addEmployee);

// Update an existing employee
router.put("/:id", updateEmployee);

// Delete an employee
router.delete("/:id", deleteEmployee);

module.exports = router;
