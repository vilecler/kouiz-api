import { ObjectId } from "mongodb";

import { Category } from './category';
import { TimedObject } from './interfaces/timedobject';
import { Translations } from './translations';

export class Theme implements TimedObject{

  constructor(
    public code: string,

    public color: string,
    public icon: string,

    public categories: Array<Category>,

    public names: Translations,
    public shortNames: Translations,

    public quizCount: number = 0,

    public createdAt: Date,
    public isHidden: boolean = false,

    public _id?: ObjectId,

    public deletedAt?: Date,
  ){ }

}
