export const userSchema = `#graphql
  type AuthenticationResponse {
    token: String
  }

  type CreateUserResponse  {
    success: Boolean
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

  type Query {
    currentUser: User @authenticated
  }

  type Mutation {
    createUser(input: CreateUserInput!): CreateUserResponse!
    authentication(input: AuthenticationInput!): AuthenticationResponse!
  }
`;
