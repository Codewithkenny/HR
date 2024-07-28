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

router.get("/", getAllEmployees);
router.get("/count", getTotalEmployees);
router.get("/:id", getEmployeeById);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);



module.exports = router;
