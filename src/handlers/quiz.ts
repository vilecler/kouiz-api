import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Quiz } from "../models/quiz";

import { Query } from "../utils/query";
import { Responses } from "../utils/responses";

const QUIZ_COLLECTION = "quizzes";

export const getQuizHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.link){
    return Responses.generateMissingParameter("link");
  }

  try {
    const query = new Query();
    query.addField("link", parameters.link);
    query.displayHiddenResult();  //Always display even if hidden because this is a direct link

    const quiz = (await database.collection(QUIZ_COLLECTION).findOne(query.q)) as Quiz;

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
  let displayHidden: boolean = false;
  if (event?.queryStringParameters?.displayHidden){
    displayHidden = Boolean(event!.queryStringParameters!.displayHidden);
  }

  if(!parameters.code){
    return Responses.generateMissingParameter('code');
  }

  try{
    const query = new Query();
    query.addField("code", parameters.code)
    if(displayHidden){ //By default hidden categories are not visible unless isHidden falcutative parameter is used.
      query.displayHiddenResult();
    }

    const quizzes = (await database.collection(QUIZ_COLLECTION).find(query.q).toArray()) as Quiz[];

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
  let displayHidden: boolean = false;
  if (event?.queryStringParameters?.displayHidden){
    displayHidden = Boolean(event!.queryStringParameters!.displayHidden);
  }

  if(!parameters.theme){
    return Responses.generateMissingParameter('theme');
  }

  try{
    const query = new Query();
    query.addField("theme", parameters.theme)
    if(displayHidden){ //By default hidden categories are not visible unless isHidden falcutative parameter is used.
      query.displayHiddenResult();
    }

    const quizzes = (await database.collection(QUIZ_COLLECTION).find(query.q).sort({ themePosition: 1 }).toArray()) as Quiz[];

    if (quizzes.length == 0 ){
      return Responses.generateNoObjectFound('Quizzes');
    }

    return Responses.generateSuccess(quizzes);

  } catch(error) {
    return Responses.generateError("Quizzes", 'Theme', parameters.theme);
  }

};
