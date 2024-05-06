import React from 'react';
import '../../styles/Sleep.css';

const TimeDisplay = ({ timeLeft }) => {
  return (
    <div>
      {timeLeft && (
        <div>
          <span style={{ fontSize: '100px', marginLeft: '100px' }}>{timeLeft}</span>
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;
