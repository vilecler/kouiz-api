import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

import { Quiz } from '../models/quiz';
import { Energy } from '../models/energy';
import { Experience } from "../models/experience";
import { Lang, Translations } from '../models/translations';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    let quizzes = [
      new Quiz(
        "european-flags-1-v1",  //direct link of the quiz. It is unique
        "european-flags-1",
        {
          "fr": "Les drapeaux d'Europe (Niveau 1)",
          "en": "Flags of Europe (Level 1)"
        },
        false,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 100),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "european-flags",
        "N°1"
      ),
      new Quiz(
        "european-flags-1-v2",  //direct link of the quiz. It is unique
        "european-flags-1",
        {
          "fr": "Les drapeaux d'Europe (Niveau 1)",
          "en": "Flags of Europe (Level 1)"
        },
        false,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 100),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "european-flags",
        "N°1"
      ),
      new Quiz(
        "european-flags-2-v1",  //direct link of the quiz. It is unique
        "european-flags-2",
        {
          "fr": "Les drapeaux d'Europe (Niveau 2)",
          "en": "Flags of Europe (Level 2)"
        },
        false,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 120),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "european-flags",
        "N°2"
      ),
      new Quiz(
        "european-flags-2b-v1",  //direct link of the quiz. It is unique
        "european-flags-2b",
        {
          "fr": "Les drapeaux d'Europe (Niveau 2) Bonus",
          "en": "Flags of Europe (Level 2) Bonus"
        },
        true,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 120),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "european-flags",
        "N°2 Bis"
      ),
      new Quiz(
        "american-flags-1-v1",  //direct link of the quiz. It is unique
        "american-flags-1",
        {
          "fr": "Les drapeaux d'Amérique (Niveau 1)",
          "en": "Flags of America (Level 1)"
        },
        false,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 100),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "american-flags",
        "N°1"
      ),
      new Quiz(
        "asian-flags-1-v1",  //direct link of the quiz. It is unique
        "asian-flags-1",
        {
          "fr": "Les drapeaux d'Asie (Niveau 1)",
          "en": "Flags of Asia (Level 1)"
        },
        false,
        [Lang.fr, Lang.en],
        [],
        10,
        new Experience(0, 100),
        new Energy(15, 20),
        new Date(Date.now()),
        false,
        0,
        "asian-flags",
        "N°1"
      ),
    ];

    await database.collection("quizzes").insertMany(quizzes);

    return await resolveRoute(event, context, database);
};

export default handler;
