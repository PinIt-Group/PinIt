import React from 'react';

const Weather = () => {
  function weatherFinder(e) {
    const input = e.target.previousSibling.value;
    e.target.previousSibling.value = '';
    fetch()
  }

  return (
    <div className="weather">
      <label htmlFor="weather">Enter zip code: </label>
      <input id="weather"></input>
      <button onClick={(e) => weatherFinder(e)}>submit</button>
    </div>
  );
};

export default Weather;
