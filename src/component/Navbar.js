import React from 'react';
import style from './css/navbar.css';
import logoNoBackground from './logoNoBackground.png';
import Weather from './Weather.js';

const NavBar = () => {
  //functionality for weather api here
  return (
    <div className="navbar">
      <img src={logoNoBackground}></img>
      <Weather />
    </div>
  );
};

export default NavBar;
