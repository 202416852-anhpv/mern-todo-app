# Todo App

A full-stack Todo application built with the MERN stack.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **Backend:** Express.js, TypeScript, Mongoose
- **Database:** MongoDB Atlas
- **DevOps:** Husky, Commitlint, GitHub Actions

## Features

- Create, read, update, and delete todos
- Search/filter todos
- Rate limiting (Token Bucket algorithm)
- Input validation with Zod
- Structured logging with Pino

## Getting Started

### Prerequisites

- Node.js >= 22
- MongoDB Atlas account

### Installation

```bash
# Root (for husky & commitlint)
npm install

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create a todo |
| DELETE | /api/todos/:id | Delete a todo |
| POST | /api/todos/:id/toggle | Toggle todo status |

## License

ISC
