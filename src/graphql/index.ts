import { makeExecutableSchema } from "@graphql-tools/schema";
import { turtleSchema } from "@/graphql/schemas/turtle.schema";
import { turtleResolver } from "@/graphql/resolvers/turtle.resolver";

const schema = makeExecutableSchema({
  typeDefs: [turtleSchema],
  resolvers: [turtleResolver],
});

export default schema;
