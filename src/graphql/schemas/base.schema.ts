export const baseSchema = `#graphql
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
