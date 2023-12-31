const express = require("express");
const swaggerRoute = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { apiFormatPath } = require("../tools/api-format-path");

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Bevent',
        version: '1.0.0',
      },
    },
    apis: [
        'features/events/event-route.js'
    ],
};
const swaggerSpec = swaggerJsdoc(options);
swaggerRoute.use(
    apiFormatPath('docs'), 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerSpec)
);

module.exports = swaggerRoute;