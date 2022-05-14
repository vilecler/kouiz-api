//Load environnement variables
require('dotenv').config();

//Bind handler
const handler = require("./dist/handlers/index");
module.exports.handler = handler.default;
