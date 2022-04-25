const AWS = require("aws-sdk");
const dbo = require("./config/db");

module.exports.handler = async (event) => {
  console.log('Event: ', event);

  const client = await clientPromise;
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
