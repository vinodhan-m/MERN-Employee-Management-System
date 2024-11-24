const express = require('express');
const multer = require('multer');
const Employee = require('../models/Employee');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Add Employee
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, email, mobile, designation, gender, course } = req.body;
        const employee = new Employee({
            name,
            email,
            mobile,
            designation,
            gender,
            course: JSON.parse(course),
            image: req.file.filename,
        });
        await employee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error adding employee', error });
    }
});

// Get Employees
router.get('/', async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json(employees);
});

module.exports = router;
