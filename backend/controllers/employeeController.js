const Employee = require("../models/employee");
const Department = require("../models/department");
const { Sequelize, Op } = require("sequelize");


// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: "Department", 
    });
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Error fetching employees" });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  const { first_name, last_name, email, position, department, date_of_hire } =
    req.body;
  try {
    const newEmployee = await Employee.create({
      first_name,
      last_name,
      email,
      position,
      department,
      date_of_hire,
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing employee
exports.updateEmployee = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    position,
    department,
    date_of_hire,
    status,
  } = req.body;
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.update({
        first_name,
        last_name,
        email,
        position,
        department,
        date_of_hire,
        status,
      });
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get total number of employees
exports.getTotalEmployees = async (req, res) => {
  try {
    const count = await Employee.count();
    res.status(200).json({ total: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


