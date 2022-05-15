import { MongoDBObject } from "./mongodbobject";

export interface TimedObject extends MongoDBObject {
  createdAt: Date;
  isHidden: boolean;
  deletedAt?: Date;
};
