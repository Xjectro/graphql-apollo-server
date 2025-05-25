import { ApolloServer } from "apollo-server";
import schema from "@/graphql";
import { context } from "@/graphql/context";
import { initRedis } from "@/models/redis.client";

async function startServer() {
  await initRedis();

  const server = new ApolloServer({
    schema,
    context,
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

startServer();
