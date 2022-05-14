import { APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const getCategoryHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'This is a category.'
    }),
  };
};
