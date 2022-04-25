//Used to connect to MongoDB Atlas Database from Variables that are in environment
const MONGODB_URI  = process.env.MONGODB_URI;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;

console.log(process.env);
const MONGODB_CONNECTION_STRING = `${MONGODB_URI.split('://')[0]}://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URI.split('://')[1]}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

module.exports = {
  MONGODB_CONNECTION_STRING,
  MONGODB_DATABASE
}
