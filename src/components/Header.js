import React from 'react';

import headshot from '../assets/headshot.png';
import classes from '../scss/header.scss';

const Header = () => {
  return <img className={classes.headshot} src={headshot} alt="profile picture"/>
};

export default Header;
