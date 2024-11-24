import React from 'react';

const Dashboard = () => {
    const username = localStorage.getItem('username');
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>User: {username}</p>
        </div>
    );
};

export default Dashboard;
