import { APIGatewayProxyResult} from 'aws-lambda';

import { capitalizeFirstLetter } from './strings'

export class Responses{

  static generateMissingParameter(parameterName: string): APIGatewayProxyResult{
    return {
      statusCode: 400,
      body: JSON.stringify({
          message: capitalizeFirstLetter(parameterName) + ' is missing.'
      })
    };
  }

  static generateNoObjectFound(objectName: string): APIGatewayProxyResult{
    return {
      statusCode: 404,
      body: JSON.stringify({
          message: 'No ' + objectName.toLowerCase() + ' found.'
      })
    };
  }

  static generateSuccess(data: any): APIGatewayProxyResult{
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }

  static generateError(objectName: string, parameterName?: string, parameterValue?: any): APIGatewayProxyResult{
    let message: string = 'Unable to find ' + objectName.toLowerCase() + '.';

    if (parameterName && parameterValue){
      message = message + " " + parameterName + " used is '" +  parameterValue + "'."
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
          message: message
      })
    };
  }

}
