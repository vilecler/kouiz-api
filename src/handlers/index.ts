import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

import { Theme } from '../models/theme';
import { Lang, Translations } from '../models/translations';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    let themes = [
      new Theme(
        "european-flags",
        "#044389",
        "globe-europe",
        ["geography"],
        {"en": "Flags of Europe", "fr": "Drapeaux d'Europe"},
        {"en": "Flags.", "fr": "Flags."},
        new Date(Date.now()),
      ),
      new Theme(
        "american-flags",
        "#228CDB",
        "globe-americas",
        ["geography"],
        {"en": "Flags of America", "fr": "Drapeaux d'Amérique"},
        {"en": "Flags.", "fr": "Flags."},
        new Date(Date.now()),
      ),
      new Theme(
        "oceanian-flags",
        "#228CDB",
        "globe-asia",
        ["geography"],
        {"en": "Flags of America", "fr": "Drapeaux d'Océanie"},
        {"en": "Flags.", "fr": "Flags."},
        new Date(Date.now()),
      ),
      new Theme(
        "asian-flags",
        "#228CDB",
        "globe-asia",
        ["geography"],
        {"en": "Flags of America", "fr": "Drapeaux d'Asie"},
        {"en": "Flags.", "fr": "Flags."},
        new Date(Date.now()),
      ),
      new Theme(
        "african-flags",
        "#228CDB",
        "globe-africa",
        ["geography"],
        {"en": "Flags of Africa", "fr": "Drapeaux d'Afrique"},
        {"en": "Flags.", "fr": "Flags."},
        new Date(Date.now()),
      ),
    ];

    await database.collection("themes").insertMany(themes);

    return await resolveRoute(event, context, database);
};

export default handler;
