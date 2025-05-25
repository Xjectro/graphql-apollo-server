import { gql } from "apollo-server";

export const userSchema = gql`
  type AuthPayload {
    token: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type Query {
    currentUser: User @authenticated
  }

  type Mutation {
    signUp(input: SignUpInput!): User!
    signIn(input: SignInInput!): AuthPayload!
  }
`;
