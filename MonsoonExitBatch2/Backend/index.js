const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection (assuming "./connection" handles the connection)
require("./connection");

// Import Employee model
const EmployeeModel = require('./model');

// POST endpoint to add a new employee
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await new EmployeeModel(req.body).save();
    res.send({ message: "Employee added", employee: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to add employee" });
  }
});

// GET endpoint to retrieve all employee information
app.get("/", async (req, res) => {
  try {
    const employees = await EmployeeModel.find(); // Retrieve all employees from the database
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to retrieve employees" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
