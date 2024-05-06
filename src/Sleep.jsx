// Sleep.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Sleep/Header';
import TimeDisplay from './components/Sleep/TimeDisplay';
import SetAlarm from './components/Sleep/SetAlarm';
import Moon from './assets/Sleep/Moon.png';
import './styles/Sleep.css';

function Sleep() {
  const [alarmTime, setAlarmTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [timeLeft, setTimeLeft] = useState('00:00');
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      setCurrentTime(timeString);

      if (alarmTime && !isAlarmTriggered) {
        const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);
        const alarmDate = new Date();
        alarmDate.setHours(alarmHours);
        alarmDate.setMinutes(alarmMinutes);
        const timeDiff = alarmDate - now;
        if (timeDiff <= 0) {
          setTimeLeft('00:00');
          setIsAlarmTriggered(true);
          alert('Time to wake up!');
          clearInterval(interval);
        } else {
          const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeLeft(`${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`);
        }
      } else {
        setTimeLeft('00:00');
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [alarmTime, isAlarmTriggered]);

  const handleSetAlarm = () => {
    if (alarmTime) {
      setIsAlarmTriggered(false);
      alert(`Alarm set for ${alarmTime}`);
    } else {
      alert('Please select a valid alarm time');
    }
  };

  return (
    <main>
      <section className='bg'>
        <Header currentTime={currentTime} />
        <SetAlarm alarmTime={alarmTime} setAlarmTime={setAlarmTime} handleSetAlarm={handleSetAlarm} />
        
        <div className='card'>
          <TimeDisplay timeLeft={timeLeft} />
          <img style={{ position: 'absolute', width: '400px', marginTop: '50px' }} src={Moon} alt='Moon' />
        </div>
        
      </section>
    </main>
  );
};

export default Sleep;
