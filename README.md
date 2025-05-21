# 🚀 GraphQL API with TypeScript, Prisma & Apollo Server

A modern GraphQL API implementation that demonstrates best practices for building scalable and maintainable GraphQL services.

## ✨ Features

- **GraphQL API** using Apollo Server for efficient data fetching
- **TypeScript** for type safety and improved developer experience
- **Prisma ORM** for type-safe database access and migrations
- **PostgreSQL** for reliable data storage
- **Modular Architecture** with clear separation of concerns
- **Development Tools** for a streamlined development workflow

## 🛠️ Tech Stack

- **Backend Framework**: Apollo Server
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Package Manager**: pnpm
- **Development Tools**: Nodemon, Prettier, dotenv

## 📋 Prerequisites

- Node.js (>= 16.x)
- pnpm (>= 10.7.0)
- PostgreSQL database

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Xjectro/graphql.git
cd graphql

# Install dependencies
pnpm install
```

### Configuration

Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/graphql"
```

### Database Setup

```bash
# Create migrations based on your schema
pnpm db:migrate

# Generate Prisma client
pnpm db:generate
```

### Running the Application

```bash
# Start the development server
pnpm dev
```

The GraphQL server will be running at `http://localhost:4000`.

## 📊 API Reference

### Available Queries

```graphql
# Get all turtles
query {
  turtles {
    id
    name
  }
}
```

### Available Mutations

```graphql
# Create a new turtle
mutation {
  createTurtle(name: "Leonardo") {
    id
    name
  }
}
```

## 📁 Project Structure

```
├─ src/
│  ├─ graphql/          # GraphQL schemas and resolvers
│  │  ├─ resolvers/     # Query and mutation resolvers
│  │  ├─ schemas/       # GraphQL type definitions
│  ├─ models/           # Database client setup
│  ├─ services/         # Business logic layer
│  └─ index.ts          # Server entry point
├─ prisma/              # Prisma schema and migrations
└─ ...config files
```

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm format` - Format code with Prettier
- `pnpm db:migrate` - Create new database migrations
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:reset` - Reset the database
- `pnpm db:status` - Check migration status
- `pnpm db:push` - Push schema changes to database

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Xjectro/graphql/issues).

## 📬 Contact

Project Link: [https://github.com/Xjectro/graphql](https://github.com/Xjectro/graphql)
