const router = require('express').Router();
const eventController = require('./event-controller');

/**
 * @swagger
 * /v1/events:
 *  get:
 *      tags:
 *          - Event
 *      description: Get list of events
 *      responses:
 *          200:
 *              description: Returns a json.
 */
router.get('/', eventController.getListEvent);

module.exports = {
    "name": "events",
    "router": router
};