import { ObjectId, Timestamp } from "mongodb";

import { TimedObject } from './interfaces/timedobject';
import { Translations } from './translations';

export class Category implements TimedObject {

  constructor(
    public code: string,

    public names: Translations,

    public createdAt: Timestamp,
    public isHidden: boolean = false,

    public _id?: ObjectId,
    public deletedAt?: Timestamp,
  ) {}

};
