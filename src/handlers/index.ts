import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { MongoClient, Db } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();



    return {
      statusCode: 404,
      body: JSON.stringify({
          message: 'Ressource not found.'
      }),
    };
};

export default handler;
