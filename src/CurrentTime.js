import React from 'react';
import './CurrentTime.css';

function CurrentTime({ date }) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return (
    <div className="current-time">
      {`${hours}:${minutes}:${seconds}`}
    </div>
  );
}

export default CurrentTime;
