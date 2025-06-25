import { ApolloServer } from "@apollo/server";
import schema from "@/graphql";
import { context } from "@/graphql/context";
import { initRedis } from "@/models/redis.client";
import { startStandaloneServer } from "@apollo/server/standalone";

async function start() {
  await initRedis();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context,
  });

  console.log(`Server ready ${url}`);
}

start();
