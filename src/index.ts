import { ApolloServer } from "apollo-server";
import schema from "@/graphql";

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // console.log(req.headers)
  },
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
