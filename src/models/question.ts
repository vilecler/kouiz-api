import { ObjectId, Timestamp } from 'mongodb';
import { MongoDBObject } from './interfaces/mongodbobject';

import { Answer } from "./answer";
import { Translations } from './translations';

export enum QuestionTypes{
  Selection,
  Duo,
  Number,
  Text
};

export class Question {

  constructor(
    public code: string,
    public name: Translations,

    public type: QuestionTypes,

    public answer: Answer,  //Answer can be proposition position or the real text answer

    public imageSrc?: string, //Image is not mandatory
    public propositions?: Array<Translations>, //Depending on the QuestionType some propositions can be displayed or not

    public _id?: ObjectId
  ){ }

};
