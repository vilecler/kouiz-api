import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Category } from "../models/category";

const CATEGORY_COLLECTION = "category";

export const getCategoryHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.code){
    return {
      statusCode: 400,
      body: JSON.stringify({
          message: 'Code is missing.'
      })
    };
  }

  try {
    const query = { code: parameters.code };
    const category = (await database.collection(CATEGORY_COLLECTION).findOne(query)) as Category;

    if (!category){
      return {
        statusCode: 404,
        body: JSON.stringify({
            message: 'Category not found.'
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
          category: category
      })
    };

  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
          message: 'Unable to find any category. Id used is: ' + parameters.id
      })
    };
  }

};


export const getCategoriesHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  console.log(event);

  //Retrieve falcutative parameter
  let isHidden: boolean = false;
  if (event?.queryStringParameters?.isHidden){
    isHidden = Boolean(event!.queryStringParameters!.isHidden);
  }

  try{
    const query = (isHidden) ? {} : {isHidden: false};  //By default hidden categories are not visible unless isHidden falcutative parameter is used.
    const categories = (await database.collection(CATEGORY_COLLECTION).find(query).toArray()) as Category[];

    if (!categories){
      return {
        statusCode: 404,
        body: JSON.stringify({
            message: 'Categories not found.'
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
          categories: categories
      })
    };

  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
          message: 'Unable to find categories.'
      })
    };
  }

};
