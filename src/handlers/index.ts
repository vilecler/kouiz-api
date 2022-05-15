import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

import { Category } from '../models/category';
import { Lang, Translations } from '../models/translations';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    let categories = Array<Category>[
      new Category(
        "astronomy",
        {
            'fr': "Astronomie",
            'en': "Astronomy",
        },
        new Date(Date.now())
      ),
      new Category(
        "english",
        {
            'fr': "Anglais",
            'en': "English",
        },
        new Date(Date.now())
      ),
      new Category(
        "biology",
        {
            'fr': "Biologie",
            'en': "Biology",
        },
        new Date(Date.now())
      ),
      new Category(
        "chemistry",
        {
            'fr': "Chimie",
            'en': "Chemistry",
        },
        new Date(Date.now())
      ),
      new Category(
        "movies",
        {
            'fr': "Films",
            'en': "Movies",
        },
        new Date(Date.now())
      ),
      new Category(
        "cooking",
        {
            'fr': "Cuisine",
            'en': "Cooking",
        },
        new Date(Date.now())
      ),
      new Category(
        "general-knowledge",
        {
            'fr': "Culture générale",
            'en': "General Knowledge",
        },
        new Date(Date.now())
      ),
      new Category(
        "economy",
        {
            'fr': "Economie",
            'en': "Economy",
        },
        new Date(Date.now())
      ),
      new Category(
        "spanish",
        {
            'fr': "Espagnol",
            'en': "Spanish",
        },
        new Date(Date.now())
      ),
      new Category(
        "french",
        {
            'fr': "Français",
            'en': "French",
        },
        new Date(Date.now())
      ),
      new Category(
        "geography",
        {
            'fr': "Géographie",
            'en': "Geography",
        },
        new Date(Date.now())
      ),
      new Category(
        "geology",
        {
            'fr': "Géologie",
            'en': "Geology",
        },
        new Date(Date.now())
      ),
      new Category(
        "history",
        {
            'fr': "Histoire",
            'en': "History",
        },
        new Date(Date.now())
      ),
      new Category(
        "italian",
        {
            'fr': "Italien",
            'en': "Italian",
        },
        new Date(Date.now())
      ),
      new Category(
        "literature",
        {
            'fr': "Littérature",
            'en': "Litterature",
        },
        new Date(Date.now())
      ),
      new Category(
        "logos",
        {
            'fr': "Logos",
            'en': "Logos",
        },
        new Date(Date.now())
      ),
      new Category(
        "mathematics",
        {
            'fr': "Mathématiques",
            'en': "Mathematics",
        },
        new Date(Date.now())
      ),
      new Category(
        "music",
        {
            'fr': "Musique",
            'en': "Music",
        },
        new Date(Date.now())
      ),
      new Category(
        "pop-culture",
        {
            'fr': "Pop-culture",
            'en': "Pop-culture",
        },
        new Date(Date.now())
      ),
      new Category(
        "physics",
        {
            'fr': "Physique",
            'en': "Physics",
        },
        new Date(Date.now())
      ),
      new Category(
        "technology",
        {
            'fr': "Technologie",
            'en': "Technology",
        },
        new Date(Date.now())
      ),
      new Category(
        "tv-series",
        {
            'fr': "Séries",
            'en': "TV Series",
        },
        new Date(Date.now())
      ),
    ];
    await database.collection("categories").insertMany(categories);

    return await resolveRoute(event, context, database);
};

export default handler;
