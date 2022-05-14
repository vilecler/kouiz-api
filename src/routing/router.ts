// @ts-nocheck
import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { RoutingItem } from "./routingitem";


import { categoryRoutes } from './category';


let cacheRoutingItems: any;

export const loadRoutingItems = () => {
  if(cacheRoutingItems){
    console.log("cached");
    return cacheRoutingItems;
  }

  let routingItems = [];

  //Append all routes here
  routingItems.push(categoryRoutes);

  console.log("Routes:");
  console.log(routingItems);

  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = (event: APIGatewayEvent, context: Context) => {

  for (let route in loadRoutingItems()) {

    console.log("Route");
    console.log(route);

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
