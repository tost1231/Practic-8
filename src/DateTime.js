import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate } from './src/slices/dateSlice';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import './DateTime.css';

function DateTime({ date, updateDate }) {
  useEffect(() => {
    const interval = setInterval(() => {
      updateDate();
    }, 1000);
    return () => clearInterval(interval);
  }, [updateDate]);

  return (
    <div className="datetime">
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  date: state.date.date,
});

const mapDispatchToProps = {
  updateDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);
