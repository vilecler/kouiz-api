import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Question } from "../models/question";

import { Query } from "../utils/query";
import { Responses } from "../utils/responses";

const QUESTION_COLLECTION = "questions";

export const getQuestionHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.id){
    return Responses.generateMissingParameter("id");
  }

  try {
    const query = new Query();
    query.addField("_id", parameters.id);
    query.displayHiddenResult();  //Always display even if hidden because this is a direct link

    const question = (await database.collection(QUESTION_COLLECTION).findOne(query.q)) as Question;

    if (!question){
      return Responses.generateNoObjectFound('Question');
    }

    return Responses.generateSuccess(question);

  } catch(error) {
    return Responses.generateError("Question", 'Id', parameters.id);
  }

};
