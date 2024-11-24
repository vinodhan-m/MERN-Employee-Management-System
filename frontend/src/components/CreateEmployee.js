import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: [],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(employee).forEach((key) => formData.append(key, employee[key]));
        try {
            await axios.post('http://localhost:5000/employees/add', formData);
            alert('Employee added successfully!');
        } catch (error) {
            alert('Error adding employee');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
            {/* Add other fields similarly */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateEmployee;
