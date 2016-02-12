import * as React from 'react';
import Button from 'common/button';
import Timer from "models/timer";

interface ActiveTimerProps {
  timer: Timer;
  onStartTimer?: any;
  onPauseTimer?: any;
}

function ActiveTimer({ timer, onStartTimer, onPauseTimer }: ActiveTimerProps) {
  return (
    <div className="active-timer__container">
      <div className="active-timer__duration">
        <div className="active-timer__duration--hours">
          {timer.duration.hours}
        </div>
        <div className="active-timer__duration--minutes">
          {timer.duration.minutes}
        </div>
        <div className="active-timer__duration--seconds">
          {timer.duration.seconds}
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