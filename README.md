# Task Management Web App

## Description

Task Management Web App is a full-stack application that allows users to manage their tasks. The application includes functionalities such as user registration, login, task creation, update, deletion, completion, filtering by status, and searching by task name. The frontend is built using React, and the backend is powered by Node.js, Express, and MongoDB.

## Features

- User registration and login
- Task creation, update, and deletion
- Mark tasks as completed or pending
- Filter tasks by status (completed, pending)
- Search tasks by name
- Responsive UI using Bootstrap
- Toast notifications using `react-toastify`

## Technologies Used
# Frontend
- React.js
- Axios
- Bootstrap
- react-toastify for notifications
# Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/interviewByte/Task-Manager-Web-App.git
   cd Task-Management-Web-App/backend
2. Install backend dependencies:

npm install
3. Create a .env file in the backend directory and add the following environment variables:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
4. Start the backend server:

npm start
## Frontend Setup
1. Navigate to the frontend directory:
cd ../frontend
2. Install frontend dependencies:
npm install
3. Start the frontend development server:
npm start
## Usage
1. Open your browser and go to http://localhost:3000.
2. Register a new account or log in with an existing account.
3. Create, update, delete, and manage your tasks.
## Folder Structure
Task-Management-Web-App/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   ├── ...
└── README.md
## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
## Contact
Pavan Singh - pavanrnri1818@gmail.com

Project Link: https://github.com/interviewByte/Task-Manager-Web-App
