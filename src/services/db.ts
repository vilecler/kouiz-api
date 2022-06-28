import { MongoClient, Db } from 'mongodb';
import { AppSettings } from '../config/constants';

let cachedDb: Db; //The database is cached here

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client: MongoClient = await MongoClient.connect(AppSettings.MONGODB_CONNECTION_STRING);
  const db: Db = await client.db(AppSettings.MONGODB_DATABASE);

  cachedDb = db;
  return db;
}
