import * as React from 'react';
import Duration from "models/duration";

export interface TimeDurationProps {
  duration: Duration;
}

function TimeDurationControl({ duration }: TimeDurationProps) {
  return (
    <div>
      <span>{ duration.hours }</span>
      <span>{ duration.minutes }</span>
      <span>{ duration.seconds }</span>
    </div>
  )
}

export default TimeDurationControl;