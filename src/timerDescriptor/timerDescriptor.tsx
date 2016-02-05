import * as React from 'react';
import Button from 'common/button';
import TimeLabel from 'timerDescriptor/timeLabel';

export interface TimerDescriptorProps {
  name: string;
  options: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

function TimerDescriptor ({ name, options }: TimerDescriptorProps) {
  return (
    <div>
      <div>{name}</div>
      <TimeLabel {...options} />
    </div>
  );
}

export default TimerDescriptor;