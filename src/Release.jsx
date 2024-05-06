import React, { useState } from 'react';
import './styles/Release.css';

function Release() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Message submitted:", message);
    setMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
  };

  return (
    <>
    <div className="release-container">
      <div className="release">
          <h1>Release Into The Abyss</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder={`Come on, take a moment to let it all out!\nPour your emotions right into this space.`}
                rows={4}
                cols={50}
                maxLength={150}
                className={!message.trim() ? '' : 'zoom-out'}
              />
              <button type="submit" disabled={!message.trim()}>Release</button>
            </form>
          ) : (
            <div className='release-new'>
              <p>Phew! A bit of release does wonders, right? <br/>
              Your emotions are welcome here. <br/>
              Keep it up, you're doing awesome!</p>
              <button onClick={handleReset}>Release More Emotions</button>
            </div>
          )}
      </div>
    </div>
    </>
  );
}

export default Release;