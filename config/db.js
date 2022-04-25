const { MongoClient } = require("mongodb");
const { MONGODB_CONNECTION_STRING, MONGODB_DATABASE } = require('./constants');

const client = new MongoClient(MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client.connect();
