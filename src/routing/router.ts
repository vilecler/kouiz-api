import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { RoutingItem } from "./routingitem";

//Load more routes here
import { categoryRoutes } from './category';
import { themeRoutes } from './theme';


let cacheRoutingItems: any;

export const loadRoutingItems = () => {
  if(cacheRoutingItems){
    return cacheRoutingItems;
  }

  let routingItems = Array<RoutingItem>();

  //Append all routes here
  routingItems = routingItems.concat(categoryRoutes);
  routingItems = routingItems.concat(themeRoutes);


  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = async (event: APIGatewayEvent, context: Context, database: Db) : Promise<APIGatewayProxyResult> => {

  let options = {segmentNameCharset : 'a-zA-Z0-9_-', segmentValueCharset: 'a-zA-Z0-9_-'};//Allow - and _ in value

  for (let route of loadRoutingItems()) {
    if (route.method == event.httpMethod && route.pattern.match(event.path, options)) {
      return await route.handler(
        route.pattern.match(event.path),
        event,
        context,
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
