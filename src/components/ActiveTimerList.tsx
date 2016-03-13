import * as React from 'react';
import ActiveTimerComponent from 'components/ActiveTimerComponent';

const ActiveTimerList = ({ activeTimers }) => {
  return <div>
    <h1>ActiveTimerList</h1>

    {activeTimers.map((activeTimer, index) => <div key={index}>
      <ActiveTimerComponent activeTimer={activeTimer} />
    </div>)}
  </div>
};

export default ActiveTimerList;