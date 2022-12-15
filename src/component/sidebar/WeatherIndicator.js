import React from 'react';

const WeatherIndicator = ({ badWeather }) => {
  return (
    <div className="indicator">
      {badWeather && (
        <span>Bad Weather!</span>
      )}
    </div>
  );
};

export default WeatherIndicator;
