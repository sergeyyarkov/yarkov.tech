import Redis from "ioredis";

const redisClient = new Redis({
	host: process.env.REDIS_HOST,
	port: Number.parseInt(process.env.REDIS_PORT || "6379", 10),
	password: process.env.REDIS_PASSWORD,
});

export { redisClient };
