import React from 'react';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case ('input'):
      inputElement = <input />;
      break;

    default:
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      <input />
    </div>
  )
};

export default input;