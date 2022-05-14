import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { MongoClient, Db } from 'mongodb';

import { getCategoryHandler } from './category';

import { connectToDatabase } from "../services/db";

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    const database: Db = await connectToDatabase();

    let routeKey: string = event.httpMethod + " " + event.path;

    switch(routeKey){
      case 'GET /categories':
        return await getCategoryHandler(event, context);
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
