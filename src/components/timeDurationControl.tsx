import * as React from 'react';
import Duration from "models/duration";
import ClassNameBuilder from 'utils/classNameBuilder';

export interface TimeDurationProps {
  duration: Duration;
}

const classBuilder = new ClassNameBuilder('time-duration-control');

function TimeDurationControl({ duration }: TimeDurationProps) {
  return (
    <div className={classBuilder.element('container')}>
      <span className={classBuilder.element('hours')}>{ duration.hours }</span>
      <span className={classBuilder.element('minutes')}>{ duration.minutes }</span>
      <span className={classBuilder.element('seconds')}>{ duration.seconds }</span>
    </div>
  )
}

export default TimeDurationControl;