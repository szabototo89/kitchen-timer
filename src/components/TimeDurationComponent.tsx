import * as React from 'react';

const TimeDurationComponent = ({ hour, minute, second }) => {
  const toNumber = (value) => value < 10 ? `0${value}` : value.toString();

  return (
    <div>
      {toNumber(hour)}
      <span>:</span>
      {toNumber(minute)}
      <span>:</span>
      {toNumber(second)}
    </div>
  );
};

export default TimeDurationComponent;