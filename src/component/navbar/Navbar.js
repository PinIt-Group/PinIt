import React from 'react';
import logoNoBackground from '../logoNoBackground.png';
import Weather from './Weather.js';

const NavBar = ({setBadWeather}) => {
  //functionality for weather api here
  return (
    <div className="navbar">
      <img src={logoNoBackground}></img>
      <Weather setBadWeather={setBadWeather}/>
    </div>
  );
};

export default NavBar;
