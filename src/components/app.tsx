import * as React from 'react';

import ActiveTimerList from 'components/activeTimerList';

import TimerListContainer from 'containers/timerListContainer';
import TimerListControlsContainer from 'containers/timerListControlsContainer';
import TimerDetailsContainer from 'containers/timerDetailsContainer';
import ActiveTimerListContainer from 'containers/activeTimerListContainer';

import Timer from 'models/timer';
import Duration from 'models/duration';

function App() {
  return (
    <div>
      <ActiveTimerListContainer />
      <TimerListContainer />
      <TimerListControlsContainer />
      <TimerDetailsContainer />
    </div>
  );
}

export default App;