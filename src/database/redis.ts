import redis from 'redis';
import { config } from 'dotenv';
config();

const db = redis.createClient({
    url: process.env.REDIS_URL
});

db.on('error', (err) => {
    console.error(err);
});

export default db;