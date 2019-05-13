import { MongoClient } from 'mongodb';
const mongoContainerName = process.env.MONGODB_HOST
const url = `mongodb://${mongoContainerName}:27017/myorganizer`;
let db = null;

export async function connectDB(){
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.log('Connected to MongoDB!');
    return db;
}