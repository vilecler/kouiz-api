
export class Query{

  constructor(
    public q: { [key: string]: any } = {}
  ) {
    this.q["deletedAt"] = null; //By default deleted values are not visible.
    this.q["isHidden"] = false; //By default hidden values are not visible.
  }

  addField(fieldName: string, fieldValue: any){
    this.q[fieldName] = fieldValue
  }

  removeField(fieldName: string){
    delete this.q[fieldName]
  }

  displayHiddenResult(){
    this.removeField('isHidden'); //Values false and true will be both selected.
  }


}
