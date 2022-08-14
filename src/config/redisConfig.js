import Redis from "ioredis";

const redisClient = new Redis({
    host: 'localhost',
    port: 6379,
    password: process.env.REDIS_PASS
});


export default redisClient; 