import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

export const getCategoryHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.id){
    return {
      statusCode: 400,
      body: JSON.stringify({
          message: 'Id is missing.'
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'This is a category. ' + parameters.id
    })
  };
};


export const getCategoriesHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'These are categories'
    })
  };
};
