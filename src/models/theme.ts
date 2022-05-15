import { ObjectId } from "mongodb";

import { Category } from './category';
import { TimedObject } from './interfaces/timedobject';
import { Translations } from './translations';

export class Theme implements TimedObject{

  constructor(
    public code: string,

    public color: string,
    public icon: string,

    public categories: Array<string>, //codes of category go here

    public names: Translations,
    public shortNames: Translations,

    public createdAt: Date,
    public quizCount: number = 0,
    public isHidden: boolean = false,

    public _id?: ObjectId,

    public deletedAt?: Date,
  ){ }

}
