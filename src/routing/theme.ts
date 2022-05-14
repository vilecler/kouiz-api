import { HTTPMethods, RoutingItem } from './routingitem';
var UrlPattern = require('url-pattern');

import { getThemesHandler, getThemeHandler } from '../handlers/theme';

export const themeRoutes = [
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/themes/:code'), getThemeHandler),
  new RoutingItem(HTTPMethods.Get, new UrlPattern('/themes/:category/category'), getThemesHandler),
];
