import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Quiz } from "../models/quiz";

import { Responses } from "../utils/responses";

const QUIZ_COLLECTION = "quizzes";

export const getQuizHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.link){
    return Responses.generateMissingParameter("link");
  }

  try {
    const query = { link: parameters.link};
    const quiz = (await database.collection(QUIZ_COLLECTION).findOne(query)) as Quiz;

    if (!quiz){
      return Responses.generateNoObjectFound('Quiz');
    }

    return Responses.generateSuccess(quiz);

  } catch(error) {
    return Responses.generateError("Quiz", 'Link', parameters.link);
  }

};


export const getQuizzesByCodeHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  //Retrieve falcutative parameter
  let isHidden: boolean = false;
  if (event?.queryStringParameters?.isHidden){
    isHidden = Boolean(event!.queryStringParameters!.isHidden);
  }

  if(!parameters.code){
    return Responses.generateMissingParameter('category');
  }

  try{
    const query = (isHidden) ? {category: parameters.code} : {isHidden: false, category: parameters.code};
    const quizzes = (await database.collection(QUIZ_COLLECTION).find(query).toArray()) as Quiz[];

    if (quizzes.length == 0 ){
      return Responses.generateNoObjectFound('Quizzes');
    }

    return Responses.generateSuccess(quizzes);

  } catch(error) {
    return Responses.generateError("Quizzes", 'Code', parameters.code);
  }

};

export const getQuizzesByThemeHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  //Retrieve falcutative parameter
  let isHidden: boolean = false;
  if (event?.queryStringParameters?.isHidden){
    isHidden = Boolean(event!.queryStringParameters!.isHidden);
  }

  if(!parameters.theme){
    return Responses.generateMissingParameter('theme');
  }

  try{
    const query = (isHidden) ? {theme: parameters.theme} : {isHidden: false, theme: parameters.theme};
    const quizzes = (await database.collection(QUIZ_COLLECTION).find(query).toArray()) as Quiz[];

    if (quizzes.length == 0 ){
      return Responses.generateNoObjectFound('Quizzes');
    }

    return Responses.generateSuccess(quizzes);

  } catch(error) {
    return Responses.generateError("Quizzes", 'Code', parameters.code);
  }

};
