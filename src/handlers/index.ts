import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { MongoClient, Db } from 'mongodb';

import { connectToDatabase } from "../services/db";

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    const database: Db = await connectToDatabase();

    event.routeKey = event.httpMethod + " " + event.path;

    switch(event.path){
      case 'GET /category':
        return await getCategoryHandler(event);
        break;
    }

    return {
      statusCode: 404,
      body: JSON.stringify({
          message: 'Ressource not found.'
      }),
    };
};

export default handler;
