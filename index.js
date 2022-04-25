const AWS = require("aws-sdk");
//const env = require("./config/env");
const dbo = require("./config/db");

module.exports.handler = async (event) => {
  console.log('Event: ', event);

  let responseMessage = 'Testing Database connection :) ' + dbo.getDatabaseConnection().databaseName;

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
