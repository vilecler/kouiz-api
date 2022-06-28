import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

const handler = async (event: any, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    print(event);

    return await resolveRoute(event, context, database);
};

export default handler;
