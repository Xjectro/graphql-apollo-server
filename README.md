# GraphQL SApollo ✨🚀

<div align="center">
  
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

</div>

<p align="center">🏗️ A modern GraphQL API server - showcasing best practices for building scalable and maintainable GraphQL services 🏗️</p>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏗️ Architecture](#️-architecture)
- [📁 Project Structure](#-project-structure)
- [📝 GraphQL Schema](#-graphql-schema)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Prerequisites](#-prerequisites)
  - [⚙️ Installation](#️-installation)
  - [🔑 Environment Variables](#-environment-variables)
- [💻 Development](#-development)
- [🗄️ Database Management](#️-database-management)
- [🏭 Production Deployment](#-production-deployment)
- [🐳 Docker Deployment](#-docker-deployment)
- [📚 API Documentation](#-api-documentation)
- [📄 License](#-license)

## ✨ Features

- **🔮 GraphQL API**: Robust GraphQL support with type checking powered by Apollo Server
- **📝 TypeScript**: Fully typed codebase for improved developer experience and code quality
- **🔐 Authentication & Authorization**: JWT-based authentication with role-based permissions
- **🗃️ Database Integration**: PostgreSQL database with Prisma ORM for type-safe queries
- **⚡ Caching**: Redis-based caching for improved performance
- **📦 Docker Support**: Containerized deployment for consistent environments
- **🧩 GraphQL Directives**: Custom directives for authentication and authorization control
- **📈 Scalable Architecture**: Service-based architecture for maintainability and scalability

## 🛠️ Technology Stack

| Technology    | Description                                |
| ------------- | ------------------------------------------ |
| Node.js       | JavaScript runtime environment             |
| TypeScript    | Typed JavaScript for better tooling        |
| Apollo Server | GraphQL server implementation              |
| Prisma        | Next-generation TypeScript ORM             |
| PostgreSQL    | Powerful open-source relational database   |
| Redis         | In-memory data structure store for caching |
| Docker        | Containerization platform                  |
| JWT           | JSON Web Token for authentication          |

## 🏗️ Architecture

This API follows a layered architecture approach:

```
Client Request → GraphQL API → Resolvers → Services → Data Access (Prisma) → Database
```

- **📊 GraphQL Layer**: Handles incoming requests and response formatting
- **🔄 Resolver Layer**: Maps GraphQL operations to service functions
- **🧠 Service Layer**: Contains business logic and calls data access methods
- **💾 Data Access Layer**: Interacts with the database via Prisma

## 📁 Project Structure

```
graphql/
├── docker-compose.yml    # Docker compose configuration
├── Dockerfile            # Docker configuration
├── prisma/               # Prisma ORM configurations
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
├── src/
│   ├── graphql/          # GraphQL schemas and resolvers
│   │   ├── directives/   # Custom GraphQL directives
│   │   ├── resolvers/    # GraphQL resolvers
│   │   └── schemas/      # GraphQL type definitions
│   ├── models/           # Database client models
│   │   ├── prisma.client.ts  # Prisma client
│   │   └── redis.client.ts   # Redis client
│   ├── services/         # Business logic services
│   └── types/            # TypeScript type definitions
└── ...
```

## 📝 GraphQL Schema

The GraphQL API provides the following core types and operations:

### 📊 Types

```graphql
# User type
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  permission: Int!
  createdAt: String!
  updatedAt: String!
}

# Authentication response type
type AuthenticationResponse {
  token: String
}

# Custom directives
directive @hasPermission(permission: Int!) on FIELD_DEFINITION
directive @authenticated on FIELD_DEFINITION
```

### 🔍 Queries

```graphql
type Query {
  currentUser: User @authenticated # Returns the currently logged-in user
}
```

### 🔄 Mutations

```graphql
type Mutation {
  createUser(input: CreateUserInput!): CreateUserResponse! # Creates a new user
  authentication(input: AuthenticationInput!): AuthenticationResponse! # Logs in a user and returns a token
}

input CreateUserInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

input AuthenticationInput {
  email: String!
  password: String!
}
```

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- PNPM 10+ ([Installation](https://pnpm.io/installation))
- PostgreSQL ([Download](https://www.postgresql.org/download/))
- Redis (optional, for caching) ([Download](https://redis.io/download))
- Docker & Docker Compose (optional, for containerization) ([Download](https://www.docker.com/products/docker-desktop/))

### ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Xjectro/graphql-apollo-server
   cd graphql-apollo-server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Generate Prisma client:

   ```bash
   pnpm db:generate
   ```

### 🔑 Environment Variables

Create a `.env` file in the root directory:

```dotenv
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"

# Authentication
JWT_SECRET="your-secure-jwt-secret"
JWT_EXPIRES_IN="24h"

# Redis (Optional - for caching)
REDIS_URL="redis://localhost:6379"
ENABLE_CACHE=true

# Server
PORT=4000
NODE_ENV=development
```

## 💻 Development

Run the development server:

```bash
pnpm dev
```

The GraphQL playground will be available at: http://localhost:4000/graphql

## 🗄️ Database Management

This project uses Prisma for database management. Available commands:

```bash
# Create and apply migrations based on schema changes
pnpm db:migrate

# Apply existing migrations to the database
pnpm db:deploy

# Check migration status
pnpm db:status

# Regenerate Prisma client
pnpm db:generate

# Reset database (caution: deletes all data)
pnpm db:reset

# Push schema changes without migrations (for development)
pnpm db:push
```

## 🏭 Production Deployment

Build and start the production server:

```bash
pnpm build
pnpm start
```

## 🐳 Docker Deployment

Build and run with Docker Compose:

```bash
# Start all services
pnpm docker

# Stop all services
pnpm docker:stop

# View logs
pnpm docker:logs
```

The Docker setup includes:

- GraphQL API server
- PostgreSQL database
- Redis cache

## 📚 API Documentation

When the server is running, you can access the GraphQL Playground at `http://localhost:4000/graphql`, which provides:

- Interactive query builder
- Schema documentation
- Real-time testing of queries and mutations

### 📝 Example Queries

#### Create a new user

```graphql
mutation {
  signUp(
    input: {
      firstName: "John"
      lastName: "Doe"
      email: "john.doe@example.com"
      password: "securePassword123"
    }
  ) {
    id
    firstName
    lastName
    email
  }
}
```

#### Login

```graphql
mutation {
  signIn(
    input: { email: "john.doe@example.com", password: "securePassword123" }
  ) {
    token
  }
}
```

#### Get user profile (authentication required)

```graphql
query {
  currentUser {
    id
    firstName
    lastName
    email
  }
}
```

> 🔐 Note: To use the `currentUser` query, you need to send a token in your HTTP headers as `Authorization: Bearer <token>`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
