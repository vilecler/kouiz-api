import { HTTPMethods, RoutingItem } from './routingitem';
var UrlPattern = require('url-pattern');

import { getQuizHandler, getQuizzesByCodeHandler, getQuizzesByThemeHandler } from '../handlers/quiz';

export const quizRoutes = [
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/quizzes/:link'), getQuizHandler),
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/quizzes/:code/code'), getQuizzesByCodeHandler),
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/quizzes/:theme/theme'), getQuizzesByThemeHandler),
];
