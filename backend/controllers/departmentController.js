const { Sequelize, Op } = require("sequelize");
const Department = require("../models/department");
const Employee = require("../models/employee");

// Get new hires
exports.getNewHiresCount = async (req, res) => {
  try {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const newHiresCount = await Employee.count({
      where: {
        date_of_hire: {
          [Op.between]: [thirtyDaysAgo, today],
        },
      },
    });

    res.status(200).json({ count: newHiresCount });
  } catch (error) {
    console.error("Error fetching new hires count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll(); // Retrieves all departments
    res.status(200).json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ message: "Error fetching departments" });
  }
};

// Get total departments
exports.getTotalDepartments = async (req, res) => {
 try {
        const Count = await Department.count(); 
       res.json({ total: Count });
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({ error: 'Failed to fetch departments' });
    }
};

// Add a new department
exports.addDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    const newDepartment = await Department.create({ name });
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
