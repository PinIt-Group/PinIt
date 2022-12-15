import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ZipInput from './ZipInput.js';
import WeatherInfo from './WeatherInfo.js';

const Weather = ({ setBadWeather }) => {
  const [weatherRequested, setWeatherRequested] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  //use state

  const badWeatherFilter = /(rain)|(snow)|(sleet)|(hail)|(precipitation)|(mist)|(storm)/gi;

  if (weatherRequested && (weatherData.conditions.match(badWeatherFilter) || weatherData.temp < 30)) {
    setBadWeather(true);
  } else {
    setBadWeather(false);
  }

  return (
    <div className="weather">
      <WeatherInfo
        weatherData={weatherData}
        weatherRequested={weatherRequested}
      />
      <ZipInput
        setWeatherData={setWeatherData}
        setWeatherRequested={setWeatherRequested}
      />
    </div>
  );
};

export default Weather;
