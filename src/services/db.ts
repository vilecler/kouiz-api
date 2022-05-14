import { MongoClient, Db } from 'mongodb';
import { AppSettings } from '../config/constants';

let cachedDb: Db;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  console.log('AppSettings.MONGODB_CONNECTION_STRING ' + AppSettings.MONGODB_CONNECTION_STRING);
  console.log('AppSettings.MONGODB_DATABASE ' + AppSettings.MONGODB_DATABASE);

  try{
    const client: MongoClient = await MongoClient.connect(AppSettings.MONGODB_CONNECTION_STRING);
    const db: Db = await client.db(AppSettings.MONGODB_DATABASE);


    cachedDb = db;
    return db;

  } catch(error) {
    console.log(error);
  }

  return cachedDb;
}
