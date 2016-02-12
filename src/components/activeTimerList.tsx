import * as React from 'react';
import ActiveTimer from 'components/activeTimer';

interface ActiveTimerListProps {
  timers: Array<any>;
}

function ActiveTimerList({ timers }: ActiveTimerListProps) {
  return (
    <div className="active-timer-list__container">
      {timers.map(activeTimer =>
        <ActiveTimer key={activeTimer.id} timer={activeTimer} />
      )}
    </div>
  );
}

export default ActiveTimerList;