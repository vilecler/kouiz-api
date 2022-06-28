import { APIGatewayProxyResult, APIGatewayProxyEventV2WithRequestContext } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { RequestContext } from "../models/requestcontext";

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

const handler = async (event: APIGatewayProxyEventV2WithRequestContext<RequestContext>): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    return await resolveRoute(event, database);
};

export default handler;
