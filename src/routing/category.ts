import { HTTPMethods, RoutingItem } from './routingitem';
var UrlPattern = require('url-pattern');

import { getCategoriesHandler, getCategoryHandler } from '../handlers/category';

export const categoryRoutes = [
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/categories/:code'), getCategoryHandler),
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/categories'), getCategoriesHandler),
];
