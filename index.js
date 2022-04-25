const AWS = require("aws-sdk");

/* Configuring mongodb connection only once */
const { MongoClient } = require('mongodb');

const uri = `${process.env.MONGODB_URI.split('://')[0]}://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI.split('://')[1]}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const clientPromise = client.connect();
/* End configuring mongodb */

module.exports.handler = async (event) => {
  console.log('Event: ', event);

  const client = await clientPromise;
  let responseMessage = 'Bite :) ' + client.db().databaseName;


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
