import * as React from 'react';

function TimeLabel ({ hours = 0, minutes = 0, seconds = 0 }: any) {
  function TimeLabelPart({ value, name }) {
    return (<span>
      <span className={`time-label__${name}`}>{value}</span>
      <span> {name}{value > 1 && 's'} </span>
    </span>);
  }

  return (
    <div>
      {hours !== 0 && <TimeLabelPart name="hour" value={hours} />}
      {minutes !== 0 && <TimeLabelPart name="minute" value={minutes} />}
      {seconds !== 0 && <TimeLabelPart name="second" value={seconds} />}
    </div>
  );
}

export default TimeLabel;