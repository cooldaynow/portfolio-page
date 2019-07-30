import React from 'react';
import './index.scss';

const DrumPad = ({
  power,
  press,
  pressValue,
  play
}) => {
  return (
    <div className="wrap__pad">
      <div className="drum__pad">
        {['Q','W','E','A','S','D', 'Z', 'X', 'C'].map((e, i ) => (
          <button 
            className = {press && e === pressValue ? 'drum__pad__buttons press' : 'drum__pad__buttons'} 
            id={e}
            key={i+e}
            onClick={power ? play : undefined } >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumPad;
