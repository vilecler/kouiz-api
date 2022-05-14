var UrlPattern = require('url-pattern');

export enum HTTPMethods{
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE"
};

export class RoutingItem{

  constructor(
    public method: HTTPMethods,
    public pattern: any,
    public handler: any
  ) { }

};
