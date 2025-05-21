import { gql } from "apollo-server";

export const turtleSchema = gql`
  type Turtle {
    id: ID!
    name: String!
  }

  type Query {
    turtles: [Turtle!]!
  }

  type Mutation {
    createTurtle(name: String!): Turtle!
  }
`;
