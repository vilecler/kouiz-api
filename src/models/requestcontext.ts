import { Http } from "./http";

export class RequestContext{

  constructor(
    public accountId: string,
    public apiId: string,
    public domainName: string,
    public domainPrefix: string,
    public http: Http,
    public requestId: string,
    public routeKey: string,
    public stage: string,
    public time: string,
    public timeEpoch: number
  ) { }

}
