/*const AWS = require("aws-sdk");
//const env = require("./config/env");
const clientPromise = require("./config/db");

module.exports.handler = async (event) => {
  console.log('Event: ', event);

  client = await clientPromise;
  let responseMessage = 'Testing Database connection :) ' + client.db().databaseName;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}*/
