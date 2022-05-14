import { Timestamp } from 'mongodb';

import { MongoDBObject } from "./mongodbobject";

export interface TimedObject extends MongoDBObject {
  createdAt: Timestamp;
  isHidden: boolean;
  deletedAt?: Timestamp;
};
