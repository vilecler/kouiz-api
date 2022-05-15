import { ObjectId } from "mongodb";

import { MongoDBObject } from "./interfaces/mongodbobject";

import { User } from "./user";

export class Friend implements MongoDBObject{

  constructor(
    public users: Array<User>, //User0 always asks to User1

    public createdAt: Date,
    public acceptedAt?: Date,
    public deletedAt?: Date,

    public _id?: ObjectId
  ){ }

};
