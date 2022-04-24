const AWS = require("aws-sdk");

/* Configuring mongodb connection only once */
const { MongoClient } = require('mongodb');

const MONGODB_CONNECTION_STRING = new URL(process.env.MONGODB_URI);
MONGODB_CONNECTION_STRING.username = process.env.AWS_ACCESS_KEY_ID;
MONGODB_CONNECTION_STRING.password = encodeURIComponent(process.env.AWS_SECRET_ACCESS_KEY);
MONGODB_CONNECTION_STRING.searchParams.set('authSource', '$external');
MONGODB_CONNECTION_STRING.searchParams.set('authMechanism', 'AWS_SESSION_TOKEN:' + encodeURIComponent(process.env.AWS_SESSION_TOKEN));

let client = new MongoClient(MONGODB_CONNECTION_STRING.toString(), { useNewUrlParser: true, useUnifiedTopology: true });
const clientPromise = client.connect();
/* End configuring mongodb */

module.exports.handler = async (event) => {
  console.log('Event: ', event);
<<<<<<< Updated upstream
  let responseMessage = 'Hello, World! I am Vivien ;).';
=======
  const client = await clientPromise;
  let responseMessage = 'Hello, World! I am Vivien ' + client.db().databaseName + ' ;).';
>>>>>>> Stashed changes

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}
