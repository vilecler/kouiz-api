import { APIGatewayProxyResult, APIGatewayProxyEventV2WithRequestContext } from 'aws-lambda';
import { Db } from 'mongodb';

import { Category } from "../models/category";
import { RequestContext } from "../models/requestcontext";

import { Query } from '../utils/query'
import { Responses } from "../utils/responses";

const CATEGORY_COLLECTION = "categories";

export const getCategoryHandler = async (parameters: any, event: APIGatewayProxyEventV2WithRequestContext<RequestContext>, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.code){
    return Responses.generateMissingParameter("code");
  }

  try {
    const query = new Query();
    query.addField("code", parameters.code);
    query.displayHiddenResult();  //Always display even if hidden because this is a direct link

    const category = (await database.collection(CATEGORY_COLLECTION).findOne(query.q)) as Category;

    if (!category){
      return Responses.generateNoObjectFound('Category');
    }

    return Responses.generateSuccess(category);

  } catch(error) {
    return Responses.generateError("Category", 'Code', parameters.code);
  }

};


export const getCategoriesHandler = async (parameters: any, event: APIGatewayProxyEventV2WithRequestContext<RequestContext>, database: Db): Promise<APIGatewayProxyResult> => {
  let displayHidden: boolean = false;
  if (event?.queryStringParameters?.displayHidden){
    displayHidden = Boolean(event!.queryStringParameters!.displayHidden);
  }

  try{
    const query = new Query();
    if(displayHidden){ //By default hidden categories are not visible unless isHidden falcutative parameter is used.
      query.displayHiddenResult();
    }

    const categories = (await database.collection(CATEGORY_COLLECTION).find(query.q).toArray()) as Category[];

    if (categories.length == 0){
      return Responses.generateNoObjectFound('Category');
    }

    return Responses.generateSuccess(categories);

  } catch(error) {
    return Responses.generateError("Categories");
  }

};
