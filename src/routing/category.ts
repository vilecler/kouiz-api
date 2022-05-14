import { HTTPMethods, RoutingItem } from './routingitem';
var UrlPattern = require('url-pattern');

import { getCategoryHandler } from '../handlers/category';

export const categoryRoutes = [
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/categories/:id'), getCategoryHandler),
];
