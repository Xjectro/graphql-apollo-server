import { gql } from "apollo-server";

export const commonSchema = gql`
  directive @hasPermission(permission: Int!) on FIELD_DEFINITION

  directive @authenticated on FIELD_DEFINITION

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
`;
