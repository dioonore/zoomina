import React from 'react';
import '../../styles/Sleep.css';

const Header = ({ currentTime }) => {
  return (
    <div className='header'>
      <span style={{ fontSize: '60px' }}>Good Night!</span>
      <p style={{ fontSize: '30px' }}>Current Time: {currentTime}</p>
    </div>
  );
};

export default Header;
