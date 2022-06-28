import { APIGatewayProxyEventV2WithRequestContext, APIGatewayProxyResult } from 'aws-lambda';
import { Db } from 'mongodb';

import { RoutingItem } from "./routingitem";

import { RequestContext } from "../models/requestcontext";

//Load more routes here
import { categoryRoutes } from './category';
import { themeRoutes } from './theme';
import { questionRoutes } from './question';
import { quizRoutes } from './quiz';


let cacheRoutingItems: any;

export const loadRoutingItems = () => {
  if(cacheRoutingItems){
    return cacheRoutingItems;
  }

  let routingItems = Array<RoutingItem>();

  //Append all routes here
  routingItems = routingItems.concat(categoryRoutes);
  routingItems = routingItems.concat(themeRoutes);
  routingItems = routingItems.concat(questionRoutes);
  routingItems = routingItems.concat(quizRoutes);

  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = async (event: APIGatewayProxyEventV2WithRequestContext<RequestContext>, database: Db) : Promise<APIGatewayProxyResult> => {

  let options = {segmentNameCharset : 'a-zA-Z0-9_-', segmentValueCharset: 'a-zA-Z0-9_-'};//Allow - and _ in value

  for (let route of loadRoutingItems()) {
    if (route.method == event.requestContext.http.method && route.pattern.match(event.requestContext.http.path, options)) {
      return await route.handler(
        route.pattern.match(event.requestContext.http.path),
        event,
        database
      );
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({
        message: 'Ressource not found.'
    }),
  };
};
