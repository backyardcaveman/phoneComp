import React from 'react';
import logo from '../public/pics/logo.png';
import classes from './Logo.module.css'

function Logo() {
  return (
    <div className={classes.logo}>
        <img src={logo}/>
    </div>
  )
}

export default Logo;