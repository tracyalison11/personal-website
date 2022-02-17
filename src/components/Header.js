import React, { Fragment } from 'react';

import headshot from '../assets/headshot.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <img className={classes.headshot} src={headshot} alt="headshot"/>
      <p className={classes.headerText}>Software Developer | Tech Community Advocate | Web3 Enthusiast</p>
    </Fragment>
  );
};

export default Header;
