import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Db, Timestamp } from 'mongodb';

import { connectToDatabase } from "../services/db";
import { resolveRoute } from "../routing/router";

import { Category } from '../models/category';
import { Lang, Translations } from '../models/translations';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const database: Db = await connectToDatabase();

    let categories = [
      new Category(
        "astronomy",
        "#7353BA",
        "meteor",
        {
            'fr': "Astronomie",
            'en': "Astronomy",
        },
        new Date(Date.now())
      ),
      new Category(
        "english",
        "#DA5552",
        "language",
        {
            'fr': "Anglais",
            'en': "English",
        },
        new Date(Date.now())
      ),
      new Category(
        "biology",
        "#31572C",
        "dna",
        {
            'fr': "Biologie",
            'en': "Biology",
        },
        new Date(Date.now())
      ),
      new Category(
        "chemistry",
        "#2F195F",
        "vial",
        {
            'fr': "Chimie",
            'en': "Chemistry",
        },
        new Date(Date.now())
      ),
      new Category(
        "movies",
        "#976391",
        "video",
        {
            'fr': "Films",
            'en': "Movies",
        },
        new Date(Date.now())
      ),
      new Category(
        "cooking",
        "#F7B538",
        "ustensils",
        {
            'fr': "Cuisine",
            'en': "Cooking",
        },
        new Date(Date.now())
      ),
      new Category(
        "general-knowledge",
        "#08BDBD",
        "theater-masks",
        {
            'fr': "Culture générale",
            'en': "General Knowledge",
        },
        new Date(Date.now())
      ),
      new Category(
        "economy",
        "#FCCA46",
        "money-bill",
        {
            'fr': "Economie",
            'en': "Economy",
        },
        new Date(Date.now())
      ),
      new Category(
        "spanish",
        "#FB4D3D",
        "language",
        {
            'fr': "Espagnol",
            'en': "Spanish",
        },
        new Date(Date.now())
      ),
      new Category(
        "french",
        "#FF9914",
        "language",
        {
            'fr': "Français",
            'en': "French",
        },
        new Date(Date.now())
      ),
      new Category(
        "geography",
        "#247BA0",
        "globe-americas",
        {
            'fr': "Géographie",
            'en': "Geography",
        },
        new Date(Date.now())
      ),
      new Category(
        "geology",
        "#53A548",
        "mountain",
        {
            'fr': "Géologie",
            'en': "Geology",
        },
        new Date(Date.now())
      ),
      new Category(
        "history",
        "#D52941",
        "chess-rook",
        {
            'fr': "Histoire",
            'en': "History",
        },
        new Date(Date.now())
      ),
      new Category(
        "italian",
        "#E67F0D",
        "language",
        {
            'fr': "Italien",
            'en': "Italian",
        },
        new Date(Date.now())
      ),
      new Category(
        "literature",
        "#7C616C",
        "book",
        {
            'fr': "Littérature",
            'en': "Litterature",
        },
        new Date(Date.now())
      ),
      new Category(
        "logos",
        "#99582A",
        "copyright",
        {
            'fr': "Logos",
            'en': "Logos",
        },
        new Date(Date.now())
      ),
      new Category(
        "mathematics",
        "#CC7178",
        "calculator",
        {
            'fr': "Mathématiques",
            'en': "Mathematics",
        },
        new Date(Date.now())
      ),
      new Category(
        "music",
        "#880D1E",
        "music",
        {
            'fr': "Musique",
            'en': "Music",
        },
        new Date(Date.now())
      ),
      new Category(
        "pop-culture",
        "#89023E",
        "hat-wizard",
        {
            'fr': "Pop-culture",
            'en': "Pop-culture",
        },
        new Date(Date.now())
      ),
      new Category(
        "physics",
        "#1D3461",
        "atom",
        {
            'fr': "Physique",
            'en': "Physics",
        },
        new Date(Date.now())
      ),
      new Category(
        "technology",
        "#113537",
        "desktop",
        {
            'fr': "Technologie",
            'en': "Technology",
        },
        new Date(Date.now())
      ),
      new Category(
        "tv-series",
        "#D52941",
        "film",
        {
            'fr': "Séries",
            'en': "TV Series",
        },
        new Date(Date.now())
      ),
      new Category(
        "videogames",
        "#37505C",
        "gamepad",
        {
            'fr': "Jeux Vidéo",
            'en': "Videogames",
        },
        new Date(Date.now())
      ),
    ];

    await database.collection("categories").insertMany(categories);

    return await resolveRoute(event, context, database);
};

export default handler;
