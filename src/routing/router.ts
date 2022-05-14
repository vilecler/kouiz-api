import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { RoutingItem } from "./routingitem";


import { getCategoryRoutes } from './category';


let cacheRoutingItems: Array<RoutingItem>;

export const loadRoutingItems = (): Array<RoutingItem> => {
  if(cacheRoutingItems){
    return cacheRoutingItems;
  }

  let routingItems: Array<RoutingItem> = [];

  //Append all routes here
  routingItems.concat(getCategoryRoutes());

  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = (event: APIGatewayEvent, context: Context) => {

  for (let route of loadRoutingItems()) {

    if (route.method == event.httpMethod && route.pattern.match(event.path)) {
      return route.handler(
        route.pattern.match(event.path),
        event,
        context
      );
      break;
    }
  }

};
