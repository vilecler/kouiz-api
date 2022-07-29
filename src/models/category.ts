import { ObjectId } from "mongodb";

import { TimedObject } from './interfaces/timedobject';
import { Translations } from './translations';

export class Category implements TimedObject {

  constructor(
    public code: string,

    public color: string,
    public icon: string,

    public name: Translations,

    public createdAt: Date,
    public themesCount: number = 0,
    public isHidden: boolean = false,

    public _id?: ObjectId,
    public deletedAt?: Date,
  ) {}

};
