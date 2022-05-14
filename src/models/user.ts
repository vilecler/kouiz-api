import { ObjectId } from "mongodb";
import { MongoDBObject } from "./interfaces/mongodbobject";

export class User implements MongoDBObject{

  constructor(
    public name: string,
    public identifier: string,
    public _id?: ObjectId
  ) { }

};
