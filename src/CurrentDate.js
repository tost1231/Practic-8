import React from 'react';
import './CurrentDate.css';

function CurrentDate({ date }) {
  const day = date.toLocaleString('uk-UA', { weekday: 'short' });
  const month = date.toLocaleString('uk-UA', { month: 'long' });
  const dayNum = date.getDate();
  const year = date.getFullYear().toString().slice(-2);

  return (
    <div className="current-date">
      {`${day}, ${dayNum} ${month}, ${year}р`}
    </div>
  );
}

export default CurrentDate;
