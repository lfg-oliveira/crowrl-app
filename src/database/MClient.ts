import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

if (typeof process.env.MONGO_URI === undefined) {
    throw new Error('Unable to read from environment variable');
}

const url = process.env.MONGO_URI;
const MClient = new MongoClient(url!).connect();



export default MClient;