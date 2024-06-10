# Student Management System using Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Overview

The Student Management System is a web application designed to manage various tasks related to student information. This system allows for performing CRUD (Create, Read, Update, Delete) operations on student data. The front-end of the application is built using Angular, and the back-end server is developed using Node.js and Express. The UI is styled with Bootstrap, HTML, and CSS.

## Technologies Used

- **Angular**: For building the front-end of the application.
- **Node.js**: For running the back-end server.
- **Express**: For handling the back-end API endpoints.
- **Bootstrap**: For responsive and modern UI design.
- **HTML & CSS**: For structuring and styling the application.

## Project Structure

- **Angular Front-End**: The client-side application built with Angular.
- **Node.js & Express Back-End**: The server-side application handling API requests, located in a separate repository named `Student_Management_System-Server`.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete student records.
- **Responsive Design**: User interface designed with Bootstrap for responsiveness.
- **RESTful API**: Backend API built with Express for handling student data.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- Angular CLI
- Git

### Installation

1. **Clone the Front-End Repository:**

   ```bash
   git clone https://github.com/BadgujarHrushikesh/Student_Management_System.git
   cd Student_Management_System
   ```

2. **Install Angular Dependencies:**

   ```bash
   npm install
   ```

3. **Clone the Back-End Repository:**

   ```bash
   cd ..
   git clone https://github.com/BadgujarHrushikesh/Student_Management_System-Server.git
   cd Student_Management_System-Server
   ```

4. **Install Express Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Back-End Server:**

   Navigate to the back-end repository and start the server:

   ```bash
   cd Student_Management_System-Server
   npm start
   ```

   The Express server should now be running on `http://localhost:5000`.

2. **Start the Front-End Server:**

   Open a new terminal window, navigate to the front-end repository, and start the Angular development server:

   ```bash
   cd Student_Management_System
   ng serve
   ```

   The Angular application should now be running on `http://localhost:4200`.

## Usage

- Navigate to `http://localhost:4200` in your web browser to access the Student Management System.
- Use the application to perform CRUD operations on student records.
- The back-end server at `http://localhost:5000` handles all API requests for managing student data.

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
