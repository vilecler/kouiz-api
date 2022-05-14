import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { RoutingItem } from "./routingitem";

//Load more routes here
import { categoryRoutes } from './category';


let cacheRoutingItems: any;

export const loadRoutingItems = () => {
  if(cacheRoutingItems){
    return cacheRoutingItems;
  }

  let routingItems = Array<RoutingItem>();

  //Append all routes here
  routingItems = routingItems.concat(categoryRoutes);


  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = async (event: APIGatewayEvent, context: Context, database: Db) : Promise<APIGatewayProxyResult> => {

  for (let route of loadRoutingItems()) {
    if (route.method == event.httpMethod && route.pattern.match(event.path)) {
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
