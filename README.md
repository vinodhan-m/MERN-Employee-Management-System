# MERN-Employee-Management-System
This is a full-stack project built using the MERN (MongoDB, Express, React, Node.js) stack. The system allows users to manage employees, including adding, editing, deleting, and viewing employee details, as well as implementing user authentication.
### Features
1. User Login:
-Validates user credentials.
-Stores session data using localStorage.
2. Dashboard:
-Displays a personalized welcome message for the logged-in user.
3. Employee Management:
-Add new employees with details such as name, email, mobile, designation, gender, course, and profile picture.
-View all employees in a sortable, paginated, and searchable list.
-Edit or delete employee details.
-Toggle employee status (Active/Inactive).
4. Form Validations:
-Both client-side (JavaScript) and server-side (API) validations.
-Duplicate email check and numeric validation for mobile numbers.
5. File Upload:
-Allows only JPG or PNG images for profile pictures.
### Tech Stack
1. Frontend:
-React.js
-Axios (for API calls)
-React Router (for navigation)
2. Backend:
-Node.js
-Express.js
-Multer (for file uploads)
-bcrypt (for password hashing)
-jsonwebtoken (for authentication)
3. Database:
-MongoDB (local or hosted on MongoDB Atlas)
### Installation Instructions
1. Clone the Repository
````
git clone https://github.com/your-username/mern-employee-management.git
cd mern-employee-management
````
2. Set Up the Backend
-Navigate to the backend directory:
````
cd backend
````
-Install dependencies:
````
npm install
````
-Set up your MongoDB database:
-Update the MongoDB connection string in server.js if needed.
-Start the MongoDB server locally using mongod or use a cloud-based database.
-Start the backend server:
````
npm run dev
````
-The backend will run at http://localhost:5000.
3. Set Up the Frontend
-Navigate to the frontend directory:
````
cd ../frontend
````
-Install dependencies:
````
npm install
````
-Start the frontend server:
````
npm start
````
-The frontend will run at http://localhost:3000.
### Usage
1. Open http://localhost:3000 in your browser.
2. Log in with your credentials (add a user directly to the database if no login exists).
3. Navigate to the dashboard to manage employees:
-Add new employees.
-Edit or delete existing employee records.
-Search and filter employees.
4. View, sort, and paginate the employee list.
````
project-folder/
├── backend/
│   ├── models/
│   │   ├── Employee.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   ├── userRoutes.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── EmployeeList.js
│   │   │   ├── CreateEmployee.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
````
### API Endpoints
-User APIs
````
Endpoint	    Method	Description
/users/login	POST	  Login user
````
-Employee APIs
````
Endpoint	      Method	Description
/employees/add	POST	  Add a new employee
/employees/   	GET	    Get the list of all employees
````
### Submission Requirements
-Share the project repository link (e.g., GitHub/GitLab).
-Include a video demo showcasing the project features.
-Submit the compiled code and database as per the instructions.
### License
This project is licensed under the MIT License
