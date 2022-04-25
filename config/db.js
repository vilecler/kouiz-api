const { MongoClient } = require("mongodb");
const { MONGODB_CONNECTION_STRING, MONGODB_DATABASE } = require('constants');

const client = new MongoClient(MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return await client.db(MONGODB_DATABASE);
  } catch (error) {
    console.log("Error connecting to MongoDB");
    console.error(error);
  }
};


module.exports = {
  getDatabaseConnection: function () {
    return dbConnection;
  },
};
