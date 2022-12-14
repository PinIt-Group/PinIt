const weatherAPIController = {};
const axios = require('axios');
// const fetch = require('node-fetch');

// Retrieve weather data from API
weatherAPIController.getWeather = async (req, res, next) => {
  try {
    const { zipCode } = req.params;
    const rawResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=66a5ba3c89a54225ba9204114221312&q=${zipCode}&aqi=yes`,
      {
        headers: {
          'Accept-Encoding': 'application/json',
        },
      }
    );
    console.log('RAW RESPONSE: ', rawResponse.data.current.temp_f);
    //We want the current temp, precipitation, and wind maybe? or do we want highs and lows
    // const {text, icon} = data.current.condition;
    // const {temp_f, wind_mph, feelslike_f} = data.current;
    res.locals.weatherData = {
      location: rawResponse.data.location.name,
      conditions: rawResponse.data.current.condition.text,
      temp: rawResponse.data.current.temp_f,
      icon: rawResponse.data.current.condition.icon,
    };
    console.log(res.locals.weatherData);
    // Cherrypick which weather info to send back
    return next();
  } catch (err) {
    return next({
      log: 'weatherAPIController.getWeather: ERROR: Issue querying weather API',
      status: 500,
      message: {
        err: 'Issue getting weather data, see server logs for more info.',
      },
    });
  }
};

module.exports = weatherAPIController;
