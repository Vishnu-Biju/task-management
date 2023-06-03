# task-management

![Screenshot (1)](https://github.com/Vishnu-Biju/task-management/assets/117735067/bbf001df-bcb7-4502-ad07-8b797f8971ee)

Task Manager
The Task Manager is a web application that allows users to manage their tasks and track their progress. It provides a simple and intuitive interface for creating, updating, and deleting tasks. The application is built using React for the frontend and a Node.js backend with Express for handling API requests and interacting with a MongoDB database.

Features
Task Creation: 
Users can create new tasks by providing a title, description, and estimated time for completion.
Task Listing:
All tasks are displayed in a list format, showing important details such as title, description, status, and creation date.
Task Deletion:
Users can delete tasks, removing them from the system permanently.
Task Status Update:
The application allows users to update the status of their tasks, marking them as "Terminated" or "Completed".
Real-time Updates:
After performing an update or deletion operation, the application reflects the changes in real-time, providing an up-to-date view of the tasks.


Technologies Used

Frontend: 
The frontend is built using React, a popular JavaScript library for building user interfaces. It provides a responsive and interactive interface for managing tasks.

Backend: 
The backend is built with Node.js and Express, which handle API requests and serve the frontend files. The backend interacts with a MongoDB database to store and retrieve task data.

Database: 
MongoDB is used as the database to store task data. It provides a flexible and scalable solution for managing structured data.

State Management:
The application uses React Context and the useReducer hook for state management. The context stores the tasks and dispatches actions for creating, updating, and deleting tasks.

Date Handling:
The date-fns library is utilized to format and calculate the time distance to the task creation date, providing a user-friendly representation of time remaining.

Styling: 
CSS is used for styling the application, providing a clean and modern look.


Installation and Usage
To run the Task Manager locally, follow these steps:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd task-manager
Install the dependencies: npm install
Set up the MongoDB connection by providing the database URL in the .env file.
Start the development server: npm start
Access the application in your browser at http://localhost:3000
