import * as React from 'react';
import Button from 'common/button';
import { exitEditMode, setDuration, saveTimer } from 'actions/timerDetailsActions';

const TimerDetails = ({ timer, dispatch }) => {
  const { name, duration } = timer;
  const saveTimer = (timer) => {
    dispatch(exitEditMode(timer));
  };

  const changeDuration = (duration) => dispatch(setDuration(duration));

  return (
    <div>
      <div>{name}</div>

      <div>
        <span>Hours {duration.hours}</span>
        <Button onClick={changeDuration.bind(null, { hours: duration.hours + 1 })}>+</Button>
        <Button onClick={changeDuration.bind(null, { hours: duration.hours - 1 })}>-</Button>
      </div>

      <div>
        <span>Minutes {duration.minutes}</span>
        <Button onClick={changeDuration.bind(null, { minutes: duration.minutes + 1 })}>+</Button>
        <Button onClick={changeDuration.bind(null, { minutes: duration.minutes - 1 })}>-</Button>
      </div>

      <div>
        <span>Seconds {duration.seconds}</span>
        <Button onClick={changeDuration.bind(null, { seconds: duration.seconds + 1 })}>+</Button>
        <Button onClick={changeDuration.bind(null, { seconds: duration.seconds - 1 })}>-</Button>
      </div>

      <Button onClick={saveTimer.bind(null, timer)}>Save</Button>
    </div>
  );
};

export default TimerDetails;