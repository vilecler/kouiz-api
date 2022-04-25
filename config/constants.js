
//Used to connect to MongoDB Atlas Database from Variables that are in environment
const MONGODB_CONNECTION_STRING = `${process.env.MONGODB_URI.split('://')[0]}://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI.split('://')[1]}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;

module.exports = {
  MONGODB_CONNECTION_STRING,
  MONGODB_DATABASE
}
