import React from 'react'
import pic from '../public/pics/iphone.avif';
import classes from './Hours.module.css';

function Hours() {
  return (
    <div className={classes.hours}>
        <img src={pic}>
        </img>
    </div>
  )
}

export default Hours