import * as React from 'react';
import Button from 'common/button';

const TimeDurationEditor = ({ duration, onDurationChange }) => {
  return (
    <div>
      <div>
        Hours: {duration.hour}
        <Button onClick={onDurationChange.bind(null, { hour: 1 })}>+</Button>
        <Button onClick={onDurationChange.bind(null, { hour: -1 })}>-</Button>
      </div>

      <div>
        Minutes: {duration.minute}
        <Button onClick={onDurationChange.bind(null, { minute: 1 })}>+</Button>
        <Button onClick={onDurationChange.bind(null, { minute: -1 })}>-</Button>
      </div>

      <div>
        Seconds: {duration.second}
        <Button onClick={onDurationChange.bind(null, { second: 1 })}>+</Button>
        <Button onClick={onDurationChange.bind(null, { second: -1 })}>-</Button>
      </div>
    </div>
  );
};

export default TimeDurationEditor;