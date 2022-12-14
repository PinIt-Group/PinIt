import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Weather = () => {
  const [weatherRequested, setWeatherRequested] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  async function weatherFinder(e) {
    try {
      const input = e.target.previousSibling.value;
      e.target.previousSibling.value = '';
      const weatherData = await axios.get(`http://localhost:3000/weather/${input}`);
      console.log('Weather Data received: ', weatherData.data);
      setWeatherData(weatherData.data);
      setWeatherRequested(true);
    } catch (err) {
      console.log(err);
    }
  }

  //use state 

  return (
    <div className="weather">
      {weatherRequested && <div>
        <img src={weatherData.icon} />
        <span>{weatherData.conditions}</span>
      </div>}
      <label htmlFor="weather">Enter zip code: </label>
      <input id="weather"></input>
      <button onClick={(e) => weatherFinder(e)}>submit</button>
    </div>
  );
};

export default Weather;
