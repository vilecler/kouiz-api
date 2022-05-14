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
  routingItems = routingItems.concat(categoryRoutes);

  console.log("Routes:");
  console.log(routingItems);

  cacheRoutingItems = routingItems;
  return routingItems;
};

export const resolveRoute = (event: APIGatewayEvent, context: Context) => {

  for (let route of loadRoutingItems()) {
    console.log("Route");
    console.log(route);
    console.log("Method " + route.method + " " + event.httpMethod);
    console.log("Pat " + route.pattern + " " + event.path);
    console.log(route.method == event.httpMethod);
    console.log(route.pattern.match(event.path));

    if (route.method == event.httpMethod && route.pattern.match(event.path)) {
      console.log("wtf");
      return route.handler(
        route.pattern.match(event.path),
        event,
        context
      );
      break;
    }
  }

};
