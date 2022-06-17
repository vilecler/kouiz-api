import { HTTPMethods, RoutingItem } from './routingitem';
var UrlPattern = require('url-pattern');

import { getQuestionHandler } from '../handlers/question';

export const questionRoutes = [
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/questions/:id'), getQuestionHandler),
];
