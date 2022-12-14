const express = require('express');
const weatherAPIRouter = express.Router();

// Require in weather controller
const weatherAPIController = require('../controllers/weatherAPIController.js');

// GET '/' --> Weather data
weatherAPIRouter.get('/:zipCode', weatherAPIController.getWeather, (req, res) => {
  res.status(200).send(res.locals.weatherData);
});

module.exports = weatherAPIRouter;