import { ObjectId } from "mongodb";

import { TimedObject } from './interfaces/timedobject';
import { Translations } from './translations';

export class Category implements TimedObject {

  constructor(
    public code: string,

    public names: Translations,

    public createdAt: Date,
    public isHidden: boolean = false,

    public _id?: ObjectId,
    public deletedAt?: Date,
  ) {}

};
