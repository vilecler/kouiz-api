import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

import { Category } from '../models/category';
import { Lang, Translations } from '../models/translations';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    return await resolveRoute(event, context, database);
};

export default handler;
