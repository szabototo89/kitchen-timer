import * as React from 'react';
import Timer from "models/timer";

export interface TimerDetailsProps {
  timer: Timer;
}

function TimerDetails({ timer }: TimerDetailsProps) {
  return (
    <div>TimerDetails</div>
  );
}

export default TimerDetails;