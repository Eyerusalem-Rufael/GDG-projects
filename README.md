Project 1: Demonstrates how to initialize a project, install dependencies like axios (for HTTP requests) and nodemon (for auto-reloading), and create custom scripts to fetch data from a public API.


Project 2: Shows how to use the lodash library to find the maximum and minimum numbers in an array, update and uninstall dependencies, and automate tasks with npm scripts.


project 3: This project shows a simple Node.js HTTP server that handles basic API requests. It includes a GET endpoint (`/hello`) that responds with a "Hello, world!" message and a POST endpoint (`/data`) that accepts JSON input and returns the received data. The server listens on port 4000 and provides a basic structure for handling HTTP requests using Node.js's built-in `http` module. It also includes error handling for undefined routes, responding with a "404 Not Found" message. This project is ideal for understanding fundamental server-side request handling in Node.js without external dependencies.

Project 4: This project demonstrates a simple Node.js HTTP server that manages a list of users with basic CRUD (Create, Read, Update, Delete) operations. The server provides endpoints to retrieve all users (GET /users), add a new user (POST /users), update an existing user (PUT /users/:id), and delete a user (DELETE /users/:id). It listens on port 4000 and processes requests using Node.js's built-in http module without external dependencies. This project serves as a foundational example for handling API requests and managing data in a server-side environment.

Project Title: Node.js Backend for Blogging Website

Welcome to the backend of a full featured Blogging Web App built using Node.js, Express
and MongoDB.
This API handles user authentication, blog post CRUD operations, profile management and  with clean code, modular structure and RESTful practices.

> 💻 Developed by: Firaol Gula
> 📅 Date: April 14, 2025

📂Project Structure
```
/project-root
│
├── src/
│   ├── config/         # DB connection & dotenv
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth, validation
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routers
│   ├── services/       # Token/email utilities
│   ├── app.js          # Main Express app
│
├── server.js           # Entry point
├── package.json
└── .env                # Environment variables
```
