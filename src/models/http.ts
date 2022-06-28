export class Http{

  constructor (
    public method: string,
    public path: string,
    public protocol: string,
    public sourceIp: string,
    public userAgent: string
  ) { }

}
