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

  let routes = loadRoutingItems()

  for (let i = 0; i < routes.length; i++) {

    console.log("Route");
    console.log(routes[i]);

    if (routes[i].method == event.httpMethod && routes[i].pattern.match(event.path)) {
      return routes[i].handler(
        route.pattern.match(event.path),
        event,
        context
      );
      break;
    }
  }

};
