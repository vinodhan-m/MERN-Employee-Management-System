import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
        </Router>
    );
}

export default App;
