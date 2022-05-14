import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { MongoClient, Db } from 'mongodb';

import { connectToDatabase } from "../services/db";

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    const database: Db = await connectToDatabase();

    console.log(event);

    return {
        statusCode: 200,
        body: JSON.stringify({
            event: event
        }),        
    };
};

export default handler;
