const globalRouter = require('express').Router();
const { apiFormatPath } = require("../tools/api-format-path");

const eventRoute = require("./events/event-route");
globalRouter.use(
    apiFormatPath(eventRoute.name), 
    eventRoute.router
);

module.exports = globalRouter;