import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';

export const getCategoryHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {

  

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'This is a category.'
    }),
  };
};
