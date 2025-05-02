# To-Do List App
A simple To-Do List application built with **Angular** and **SCSS**. Users can add tasks, mark them as completed, delete tasks, clear all tasks, and view a persistent task list. The app uses a standalone component with Template-driven Forms for input and persists tasks, including completion status, in `localStorage`. The app uses a service to manage task data and Template-driven Forms for user input, with input validation to ensure non-empty task titles. This project is a beginner-friendly introduction to Angular concepts like components, services, forms, and SCSS styling.

## Features
- Add tasks with a title.

- Mark tasks as completed using checkboxes.

- Delete individual tasks.

- Display tasks in a styled list with *ngFor.

- Input validation to prevent empty tasks.

- Responsive design with SCSS (using modern color.adjust for color manipulation).

- Task data managed via a TodoService for scalability.

- Tasks are stored using Local Storage

## Prerequisites 
Node.js (v18 or later)

Angular CLI: Install globally with
```
npm install -g @angular/cli
```

## Setup
1. `git clone https://github.com/austinslatey/todo-app.git`

2. `cd todo-app`

- Install Dependencies:

    `npm install`

- Run the Development Server

    `ng serve`

Open http://localhost:4200 in your browser to view the app.


## Usage
- Add a Task: 
    Enter a task title in the input field and click "Add Task" (disabled if empty).

- Complete a Task: 
    Check the checkbox next to a task to mark it as completed (strikethrough applied).

- Delete a Task: 
    Click the "Delete" button next to a task to remove it.

- View Tasks: 
    Tasks are displayed in a list, with a message shown if the list is empty.

## Project Structure 
- `src/app/app.component.ts`: Main component with task logic and form handling.

- `src/app/app.component.html`: Template with form and task list using *ngFor.

- `src/app/app.component.scss`: SCSS styles with variables and modern color.adjust for hover effects.

- `src/app/todo.service.ts`: Service to manage task data (add, toggle, delete).

- `src/app/app.module.ts` (or standalone component): Configures FormsModule and CommonModule.

## Dependencies 
- `Angular: v17+` (check package.json for exact version)

- `Sass`: For SCSS compilation (uses modern sass:color module)

- `FormsModule`: For Template-driven Forms with [(ngModel)]




