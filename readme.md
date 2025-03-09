# Student Management System using JsonPowerDB

## Description
This project is a **Student Management System** that utilizes **JsonPowerDB (JPDB)** as a backend database. It provides an interactive web form to store, retrieve, and update student details such as roll number, name, class, birth date, address, and enrollment date. The form interacts with **JsonPowerDB's REST API** to perform CRUD operations efficiently.

## Table of Contents
- [Description](#description)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [Examples of Use](#examples-of-use)
- [Release History](#release-history)
- [Sources](#sources)
- [Project Status](#project-status)
- [Additional Information](#additional-information)

## Benefits of using JsonPowerDB
JsonPowerDB is a **high-performance, serverless, and real-time NoSQL database** that simplifies backend development. Some of its key benefits include:
- **Lightweight and Fast:** Minimal response time for API calls.
- **Serverless & Real-time:** No need for additional backend infrastructure.
- **Easy API Integration:** Provides a simple REST API for CRUD operations.
- **Index Manipulation & Data Analytics:** Built-in support for indexing and query execution.
- **Secure and Scalable:** Uses connection tokens for authentication and supports large-scale applications.

## Features
- **Student Record Management:** Add, update, retrieve, and delete student records.
- **Auto-disable & Enable Buttons:** The form buttons are dynamically enabled/disabled based on user input.
- **Primary Key Enforcement:** Roll Number is used as a unique identifier.
- **Bootstrap-powered UI:** Provides a responsive and user-friendly interface.

## Project Structure
```
Student-Management-System/
│── index.html        # Main UI for student data entry
│── index.js          # JavaScript logic for JPDB interaction
│── README.md         # Project documentation
```

## Technologies Used
- **Frontend:** HTML, CSS, Bootstrap, JavaScript, jQuery
- **Backend Database:** JsonPowerDB (REST API-based)
- **Libraries & APIs:** JPDB Commons, AJAX

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/student-management-system.git
   ```
2. Open `index.html` in a web browser.
3. Ensure you have an active connection to the JPDB server.
4. Enter the **Roll Number** and check if the student exists.
5. If new, fill in the details and click **Save**.
6. If existing, update details and click **Update**.
7. Use **Reset** to clear the form.

## Examples of Use
- **Adding a New Student:** Enter a roll number, fill out the details, and save.
- **Updating Student Information:** Enter an existing roll number to fetch details, modify them, and update.
- **Resetting Form:** Clears all input fields and resets buttons.

## Release History
- **v1.0.0** (March 2025): Initial release with student form and CRUD operations using JsonPowerDB.

## Sources
- **JPDB Documentation:** [JsonPowerDB Docs](http://login2explore.com/jpdb/docs.html#jpdb-command-request)

## Project Status
- **Active:** Open for improvements and enhancements.

## Additional Information
- **Author:** Rudrangi Rai
- **License:** MIT
- **Contributions:** Open to contributions! Feel free to submit pull requests.


