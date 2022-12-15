import React from 'react';
import axios from 'axios';

const ZipInput = ({ setWeatherData, setWeatherRequested }) => {
  async function weatherFinder(e) {
    try {
      const input = e.target.previousSibling.value;
      e.target.previousSibling.value = '';
      const weatherData = await axios.get(
        `http://localhost:3000/weather/${input}`
      );
      console.log('Weather Data received: ', weatherData.data);
      setWeatherData(weatherData.data);
      setWeatherRequested(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <label htmlFor="weather">Enter zip code: </label>
      <input id="weather"></input>
      <button onClick={(e) => weatherFinder(e)}>get weather</button>
    </div>
  );
};

export default ZipInput;
