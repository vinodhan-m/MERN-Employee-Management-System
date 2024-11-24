const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String },
    gender: { type: String },
    course: { type: Array },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
