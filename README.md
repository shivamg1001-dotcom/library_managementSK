Library Management System
Project Overview
Library Management System is a RESTful Backend API developed using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.
The system helps manage:
•	Users
•	Categories
•	Books
•	Book Issue & Return Records
This project implements complete CRUD operations and follows REST API architecture.
________________________________________
Features
User Management
•	User Registration
•	User Login
•	View Users
•	Delete Users
Category Management
•	Create Category
•	View Categories
•	Update Category
•	Delete Category
Book Management
•	Add New Book
•	View Books
•	Update Book Information
•	Delete Book
Issue Book Management
•	Issue Book to User
•	Return Book
•	View Issued Books
•	Delete Issue Record
Authentication
•	JWT Based Authentication
•	Protected Routes
•	Secure Password Storage using bcrypt
________________________________________
Technology Stack
Backend
•	Node.js
•	Express.js
Database
•	MongoDB Atlas
•	Mongoose ODM
Authentication
•	JWT (JSON Web Token)
•	bcryptjs
Development Tools
•	VS Code
•	Git
•	GitHub
•	Postman
________________________________________
Project Structure
library-management/
├── config/
│ └── db.js
├── controllers/
│ ├── userController.js
│ ├── categoryController.js
│ ├── bookController.js
│ └── issueController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ ├── Category.js
│ ├── Book.js
│ └── IssueBook.js
├── routes/
│ ├── userRoutes.js
│ ├── categoryRoutes.js
│ ├── bookRoutes.js
│ └── issueRoutes.js
├── .env
├── server.js
└── package.json
________________________________________
Installation
Clone Repository
git clone
Move into Project Folder
cd library-management
Install Dependencies
npm install
Start Development Server
npm run dev
________________________________________
Environment Variables
Create a .env file in the root directory.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=librarysecretkey
________________________________________
API Modules
User Module
POST /api/users/register
POST /api/users/login
GET /api/users
DELETE /api/users/:id
________________________________________
Category Module
POST /api/categories
GET /api/categories
PUT /api/categories/:id
DELETE /api/categories/:id
________________________________________
Book Module
POST /api/books
GET /api/books
GET /api/books/:id
PUT /api/books/:id
DELETE /api/books/:id
________________________________________
Issue Book Module
POST /api/issues
GET /api/issues
PUT /api/issues/:id
DELETE /api/issues/:id
________________________________________
Authentication
Protected routes require JWT token.
Authorization Header:
Authorization: Bearer TOKEN
________________________________________
Contributors
Member 1
Shivam Gupta
Responsibilities:
•	Project Setup
•	Authentication Module
•	User Module
•	Category Module
•	Book Module
Member 2
Karan Chougule
Responsibilities:
•	MongoDB Integration
•	API Testing
•	Postman Collection
•	Final Verification
________________________________________
GitHub Repository
Repository Link:
(Add GitHub Repository URL Here)
________________________________________
Postman Collection
Collection Link:
(Add Postman Collection Link Here)
________________________________________
Project Status
Completed Features:
•	CRUD Operations
•	JWT Authentication
•	MongoDB Atlas Integration
•	RESTful APIs
•	Book Issue and Return System
________________________________________
Future Enhancements
•	Fine Calculation
•	Admin Dashboard
•	Search and Filter APIs
•	Email Notifications
•	Role Based Access Control
________________________________________
Conclusion
The Library Management System provides a complete backend solution for managing library operations using modern web technologies and follows industry-standard REST API practices.

