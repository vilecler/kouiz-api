import { ObjectId, Timestamp } from 'mongodb';

import { MongoDBObject } from './interfaces/mongodbobject';

import { User } from './user';

export class ThemeScore implements MongoDBObject {

  constructor(
    public code: string,

    public user: User,
    public quizDone: Array<string>,

    public createdAt: Timestamp,
    public updatedAt: Timestamp,
    public isHidden: boolean = false,

    public _id?: ObjectId
  ){ }

};
