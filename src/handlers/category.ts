import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Category } from "../models/category";

import { Query } from '../utils/query'
import { Responses } from "../utils/responses";

const CATEGORY_COLLECTION = "categories";

export const getCategoryHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.code){
    return Responses.generateMissingParameter("code");
  }

  try {
    const query = new Query();
    query.addField("code", parameters.code);

    const category = (await database.collection(CATEGORY_COLLECTION).findOne(query.q)) as Category;

    if (!category){
      return Responses.generateNoObjectFound('Category');
    }

    return Responses.generateSuccess(category);

  } catch(error) {
    return Responses.generateError("Category", 'Code', parameters.code);
  }

};


export const getCategoriesHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  //Retrieve falcutative parameter
  let isHidden: boolean = false;
  if (event?.queryStringParameters?.isHidden){
    isHidden = Boolean(event!.queryStringParameters!.isHidden);
  }

  try{
    const query = (isHidden) ? {} : {isHidden: false};  //By default hidden categories are not visible unless isHidden falcutative parameter is used.
    const categories = (await database.collection(CATEGORY_COLLECTION).find(query).toArray()) as Category[];

    if (categories.length == 0){
      return Responses.generateNoObjectFound('Categories');
    }

    return Responses.generateSuccess(categories);

  } catch(error) {
    return Responses.generateError("Categories");
  }

};
