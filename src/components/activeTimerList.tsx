import * as React from 'react';
import ActiveTimer from 'components/activeTimer';
import Timer from "models/timer";

interface ActiveTimerListProps {
  timers: Array<Timer>;
}

function ActiveTimerList({ timers, onStartTimer, onPauseTimer }: ActiveTimerListProps) {
  return (
    <div className="active-timer-list__container">
      {timers.map(activeTimer =>
        <ActiveTimer key={activeTimer.id} timer={activeTimer}
                     onStartTimer={onStartTimer.bind(activeTimer)}
                     onPauseTimer={onPauseTimer.bind(activeTimer)} />
      )}
    </div>
  );
}

export default ActiveTimerList;