import { APIGatewayProxyResult, APIGatewayEvent, Context } from 'aws-lambda';
import { Db } from 'mongodb';

import { Theme } from "../models/theme";

import { Query } from "../utils/query";
import { Responses } from "../utils/responses";

const THEME_COLLECTION = "themes";

export const getThemeHandler = async (parameters: any, event: APIGatewayEvent, context: Context, database: Db): Promise<APIGatewayProxyResult> => {
  if(!parameters.code){
    return Responses.generateMissingParameter("code");
  }

  try {
    const query = new Query();
    query.addField("code", parameters.code);
    query.displayHiddenResult();  //Always display even if hidden because this is a direct link

    const theme = (await database.collection(THEME_COLLECTION).findOne(query.q)) as Theme;

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
  let displayHidden: boolean = false;
  if (event?.queryStringParameters?.displayHidden){
    displayHidden = Boolean(event!.queryStringParameters!.displayHidden);
  }

  if(!parameters.category){
    return Responses.generateMissingParameter('category');
  }

  try{
    const query = new Query();
    query.addField("categories", parameters.category);

    if(displayHidden){ //By default hidden categories are not visible unless isHidden falcutative parameter is used.
      query.displayHiddenResult();
    }
    const themes = (await database.collection(THEME_COLLECTION).find(query.q).toArray()) as Theme[];

    if (themes.length == 0 ){
      return Responses.generateNoObjectFound('Themes');
    }

    return Responses.generateSuccess(themes);

  } catch(error) {
    return Responses.generateError("Themes", 'Category', parameters.category);
  }

};
