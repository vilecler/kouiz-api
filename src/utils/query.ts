
export class Query{

  constructor(
    public q: { [key: string]: any } = {}
  ) {}

  addField(fieldName: string, fieldValue: any){
    this.q[fieldName] = fieldValue
  }

  removeField(fieldName: string){
    delete this.q[fieldName]
  }
}
