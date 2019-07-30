import React from 'react';
import './index.scss';

const Screen = ({screen, mins, secs}) => (
  <div className="pomodoro__screen">
    <h2>{screen}</h2>
      <div className = 'pomodoro__time'>
        {`${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`}
      </div>
  </div>
);

export default Screen;
