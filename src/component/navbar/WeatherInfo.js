import React from 'react';

const WeatherInfo = ({ weatherData, weatherRequested }) => {
  //functionality for weather api here

  return (
    <div >
      {weatherRequested && (
        <div className="weatherInfo">
          <img src={weatherData.icon} />
          <div className="weatherNoIcon">
            <h4><strong>{weatherData.location}</strong></h4>
            <span>Conditions: {weatherData.conditions}</span><br/>
            <span>Temp: {Math.round(weatherData.temp)}&#176;F</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
