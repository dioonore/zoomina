import React from 'react';
import '../../styles/Sleep.css';

const SetAlarm = ({ alarmTime, setAlarmTime, handleSetAlarm }) => {
  return (
    <div className='set'>
      <label>Set Alarm:</label>
      <input 
        type="time" 
        value={alarmTime} 
        onChange={(e) => setAlarmTime(e.target.value)} 
      />
      <button onClick={handleSetAlarm}>Set Alarm</button>
    </div>
  );
};

export default SetAlarm;
