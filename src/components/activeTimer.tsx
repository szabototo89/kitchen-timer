import * as React from 'react';
import Button from 'common/button';
import Duration from "models/duration";

interface ActiveTimerProps {
  duration: Duration;
  onStartTimer?: any;
  onPauseTimer?: any;
}

function ActiveTimer({ duration, onStartTimer, onPauseTimer }: ActiveTimerProps) {
  return (
    <div className="active-timer__container">
      <div className="active-timer__duration">
        <div className="active-timer__duration--hours">
          {duration.hours}
        </div>
        <div className="active-timer__duration--minutes">
          {duration.minutes}
        </div>
        <div className="active-timer__duration--seconds">
          {duration.seconds}
        </div>
      </div>

      <Button className="active-timer__button active-timer__button--start"
              onClick={onStartTimer}>
        Start
      </Button>
      <Button className="active-timer__button active-timer__button--pause"
              onClick={onPauseTimer}>
        Pause
      </Button>
    </div>
  );
}

export default ActiveTimer;