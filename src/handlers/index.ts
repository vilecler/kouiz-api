import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    return await resolveRoute(event, context, database);
};

export default handler;
