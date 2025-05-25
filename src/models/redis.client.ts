import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => console.error("Redis:", err));

const initRedis = async () => {
  await redis.connect();
  return redis;
};

export { initRedis };
export default redis;
