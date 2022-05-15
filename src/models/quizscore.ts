import { ObjectId } from 'mongodb';

import { MongoDBObject } from './interfaces/mongodbobject';

import { Answer } from "./answer";
import { Energy } from './energy';
import { Experience } from './experience';
import { Lang, Translations } from './translations';
import { User } from './user';
import { UserScore } from './userscore';

export class QuizScore implements MongoDBObject{

  constructor(
    public link: string,  //To which quiz this instance is linked
    public code: string,
    public createdFor: User,

    public answers: Array<Answer>,
    public score: UserScore,

    public rank: number,

    public createdAt: Date,

    //To display faster in history
    public name: Translations,
    public isPremium: boolean,
    public langsAvailable: Array<Lang>,
    public questionsCount: number = 0,
    public experience: Experience,
    public energy: Energy,
    public theme?: string,   //undefined when the quiz is a community quiz.
    public themePosition?: string, // little label for the position of the quiz within the theme if exists.

    public _id?: ObjectId
  ) { }

};
