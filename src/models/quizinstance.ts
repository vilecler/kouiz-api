import { ObjectId } from "mongodb";

import { MongoDBObject } from './interfaces/mongodbobject';

import { Answer } from "./answer";
import { User } from './user';
import { UserScore } from './userscore';

export enum QuizInstanceStates{
  UnderCreation,
  Created,
  WaitingForParticipant,
  InProgress,
  PublishingScores
};

export class QuizInstance implements MongoDBObject{

  constructor(
    public link: string,  //To which quiz this instance is linked
    public code: string,

    public invited: Array<User>,
    public invitedCount: number,
    public participants: Array<User>,
    public participantsCount: number,

    public state: QuizInstanceStates,

    public participantAnswers: Map<ObjectId, Array<Answer>>,  //contains a list of answer for each participant
    public participantScores: Map<ObjectId, Array<UserScore>>,

    public ranking: Map<ObjectId, number>,

    public createdAt: Date,

    public _id?: ObjectId
  ) { }

};
