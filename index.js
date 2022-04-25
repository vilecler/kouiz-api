const AWS = require("aws-sdk");
//const env = require("./config/env");
const dbo = require("./config/db");

const { MONGODB_CONNECTION_STRING, MONGODB_DATABASE } = require('./config/constants');

module.exports.handler = async (event) => {
  console.log('Event: ', event);

  const client = await clientPromise;
  let responseMessage = 'Testing Database connection :) ' + MONGODB_CONNECTION_STRING;

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
