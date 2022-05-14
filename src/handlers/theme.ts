import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Theme } from "../models/theme";

import { Responses } from "../utils/responses";

const THEME_COLLECTION = "themes";

export const getThemeHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.code){
    return Responses.generateMissingParameter("code");
  }

  try {
    const query = { code: parameters.code };
    const theme = (await database.collection(THEME_COLLECTION).findOne(query)) as Theme;

    if (!theme){
      return Responses.generateNoObjectFound('Theme');
    }

    return Responses.generateSuccess(theme);

  } catch(error) {
    return Responses.generateError("Theme", 'Code', parameters.code);
  }

};


export const getThemesHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  //Retrieve falcutative parameter
  let isHidden: boolean = false;
  if (event?.queryStringParameters?.isHidden){
    isHidden = Boolean(event!.queryStringParameters!.isHidden);
  }

  if(!parameters.category){
    return Responses.generateMissingParameter('category');
  }

  try{
    const query = (isHidden) ? {category: parameters.category} : {isHidden: false, category: parameters.category};
    const themes = (await database.collection(THEME_COLLECTION).find(query).toArray()) as Theme[];

    if (themes.length == 0 ){
      return Responses.generateNoObjectFound('Themes');
    }

    return Responses.generateSuccess(themes);

  } catch(error) {
    return Responses.generateError("Themes", 'Category', parameters.category);
  }

};
