# Task Management System

A powerful Task Management System built with NestJS, PostgreSQL, and TypeScript.

## Table of Contents

- [Task Management System](#task-management-system)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)

## Project Description

The Task Management System is designed to help you manage tasks efficiently. This application provides a RESTful API for creating, updating, fetching, and deleting tasks.

## Features

- Create a new task with a title and description.
- Update a task's details.
- Retrieve a list of tasks or a single task by ID.
- Delete a task by ID.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harshmriduhash/task-management
   cd task-management-system
   yarn or npm install

   ```

2. Configure your PostgreSQL database in ormconfig.json.
   Run the application:

   ```bash
   npm run start

   ```

   The application is now accessible at <http://localhost:3000>

## Usage

1. Create a task:
   Send a POST request to <http://localhost:3000/tasks> with a JSON body like:

```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

2. Update a task:
   Send a PUT request to <http://localhost:3000/tasks/{taskId}>
   with a JSON body containing the updated task details.

3. Get a list of tasks:
   Send a GET request to <http://localhost:3000/tasks>.

4. Get a task by ID:
   Send a GET request to <http://localhost:3000/tasks/{taskId}>.

5. Delete a task:
   Send a DELETE request to <http://localhost:3000/tasks/{taskId}>.
