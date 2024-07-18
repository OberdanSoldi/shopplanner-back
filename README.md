# ShopPlanner

ShopPlanner is a modern web application designed to help you plan and manage your shopping lists with ease. Built with TypeScript, Bun, Express, and Prisma ORM, this project provides a robust and efficient platform for handling your shopping needs.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **TypeScript** for static type checking and better developer experience.
- **Bun** for fast and modern JavaScript runtime.
- **Express** for a minimal and flexible Node.js web application framework.
- **Prisma ORM** for database access and management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later)
- [Bun](https://bun.sh/) (v1.0.0 or later)
- [PostgreSQL](https://www.postgresql.org/) (or any other supported database)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/OberdanSoldi/shopplanner-back.git
   cd shopplanner
   ```

2. **Install dependencies**

   Using Bun:

   ```bash
   bun i
   ```

3. **Set up the database**

   Ensure you have PostgreSQL (or your chosen database) running.

   Create a `.env` file in the root of your project and add your database connection string:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/shopplanner"
   ```

4. **Run database migrations**

   ```bash
   npx prisma generate
   ```

### Running the Project

1. **Start the server**

   ```bash
   bun dev
   ```

2. The project should now be running on `http://localhost:3000`.

## Project Structure

```plaintext
shopplanner/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── domain/
│   ├── http/
│   ├── lib/
│   ├── usecase/
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
├── LICENSE
├── .gitignore
├── docker-compose.yml
├── bun.lockb
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to better fit your project's specifics and additional details.
