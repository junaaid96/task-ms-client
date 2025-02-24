# Task Management System

A full-stack web application for managing projects and tasks built with Angular and Bootstrap.

## Features

- **Project Management**
  - Create new projects
  - Update existing projects
  - Delete projects
  - View project details

- **Task Management**
  - Create tasks within projects
  - Update task details
  - Delete tasks
  - Filter tasks by project
  - Set task priorities and status
  - Track task due dates

## Technical Stack

- **Frontend**
  - Angular 11.2.19
  - Bootstrap 5.3.3
  - TypeScript
  - HTML/CSS

## Project Structure

```
task-ms-client/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── project/
│   │   │   └── task/
│   │   ├── services/
│   │   │   └── api.service.ts
│   │   └── pipes/
│   └── assets/
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Angular CLI (v11.2.19)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
cd task-ms-client
npm install
```

3. Start the development server
```bash
ng serve
```

4. Navigate to `http://localhost:4200` in your browser

## Usage

### Projects
- Click "Create Project" to add a new project
- Use "Update" button to modify existing projects
- Use "Delete" button to remove projects

### Tasks
- Select a project to add tasks
- Fill in task details including:
  - Title
  - Description
  - Priority (LOW, MEDIUM, HIGH, URGENT)
  - Status (TODO, IN_PROGRESS, REVIEW, DONE)
  - Due Date
- Use "Update" to modify tasks
- Use "Delete" to remove tasks

## Development

### Running Tests
```bash
ng test
```

### Building for Production
```bash
ng build --prod
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
