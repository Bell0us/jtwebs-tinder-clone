import React from 'react';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { IconButton } from '@material-ui/core';

const Header = ({ title }) => {
  // ! getting all elements I need for light / dark mode
  const light = document.querySelector('.day');
  const dark = document.querySelector('.night');
  const app = document.querySelector('.App');
  const body = document.body;

  // ! user clicked on light mode switcher
  light &&
    light.addEventListener('click', () => {
      light.classList.add('active');
      dark.classList.remove('active');
      body.classList.remove('body-dark');
      app.classList.remove('app-dark');
    });

  // ! user clicked on dark mode switcher
  dark &&
    dark.addEventListener('click', () => {
      dark.classList.add('active');
      light.classList.remove('active');
      body.classList.add('body-dark');
      app.classList.add('app-dark');
    });

  return (
    <header>
      <h1 className="app-title">
        {' '}
        <img
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          alt="tinder-icon"
          width="30px"
          height="auto"
        />{' '}
        {title}{' '}
      </h1>
      <div className="dark-light-switchers">
        <IconButton className="switch active day" size="small" style={{ padding: '8px' }}>
          <WbSunnyIcon style={{ fontSize: 30, color: '#FFD44C' }} />
        </IconButton>
        <IconButton className="switch night" size="small" style={{ padding: '8px' }}>
          <Brightness3Icon style={{ fontSize: 30, color: '#1B2880' }} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
