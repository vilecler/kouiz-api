import { ObjectId } from "mongodb";

import { TimedObject } from './interfaces/timedobject';

import { Category } from './category';
import { Energy } from "./energy";
import { Experience } from "./experience";
import { Question } from "./question";
import { Lang, Translations } from './translations';
import { User } from './user';

export class Quiz implements TimedObject{

  constructor(
    public link: string,  //direct link of the quiz. It is unique
    public code: string,

    public name: Translations,

    public isPremium: boolean,
    public langsAvailable: Array<Lang>,

    public questions: Array<string>,  //Link to the questions
    public durationBetweenQuestions: number,

    public experience: Experience,
    public energy: Energy,

    public createdAt: Date,
    public isHidden: boolean = false,
    public questionsCount: number = 0,

    public theme?: string,   //undefined when the quiz is a community quiz.
    public themePosition?: string, // little label for the position of the quiz within the theme if exists.
    public themeIndex?: number,
    public creator?: User,//creator is defined when it is a community quiz only

    public deletedAt?: Date,
    public _id?: ObjectId,
  ) { }

}
